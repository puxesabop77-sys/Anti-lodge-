// ======================================
// FILE: admin-fetch.js
// PURPOSE: Fetch All Answers
// ======================================

async function loadSubmissions(){

    const { data, error } =
    await supabase
    .from("answers")
    .select("*")
    .order(
        "created_at",
        {
            ascending:false
        }
    );

    if(error){

        console.error(error);

        return [];
    }

    return data;
}
