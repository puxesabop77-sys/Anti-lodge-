// ======================================
// FILE: submit-handler.js
// PURPOSE: Save User Answer
// ======================================

async function saveAnswerToDatabase(
    userId,
    name,
    email,
    answer
){

    const { data, error } =
    await supabase
    .from("answers")
    .insert([{
        user_id:userId,
        name:name,
        email:email,
        answer:answer
    }]);

    if(error){

        console.error(error);

        alert(
            "Submission Failed"
        );

        return false;
    }

    console.log(
        "Answer Submitted",
        data
    );

    return true;
          }
