function checkAnagram() {
    let w1 = document.getElementById("word1").value;
    let w2 = document.getElementById("word2").value;

    let sorted1 = w1.split("").sort().join("");
    let sorted2 = w2.split("").sort().join("");

    if (sorted1 === sorted2) {
        document.getElementById("result").innerHTML = "Anagram";
    } else {
        document.getElementById("result").innerHTML = "Not Anagram";
    }
}
