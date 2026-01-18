function generatePlan() {
    const data = {
        exam: "JEE",
        hoursPerDay: 6,
        subjects: ["Maths", "Physics", "Chemistry"]
    };

    fetch("http://localhost:5501/generate-plan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
            document.getElementById("plan").innerText = result.plan;
        })
        .catch(err => {
            document.getElementById("plan").innerText =
                "❌ Backend connection failed";
            console.error(err);
        });
}
