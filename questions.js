const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

async function loadQuestions() {
  const { createClient } = supabase;
  const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const { data, error } = await client
    .from("questions")
    .select("*")
    .order("id");

  if (error) {
    console.error(error);
    alert("Questions load नहीं हुए");
    return [];
  }

  return data.map(q => ({
    q: q.question,
    o: [q.option1, q.option2, q.option3, q.option4],
    a: q.answer - 1,
    e: q.explanation || ""
  }));
}

let questions = [];

(async () => {
  questions = await loadQuestions();
  if (typeof startQuiz === "function") {
    startQuiz();
  }
})();
