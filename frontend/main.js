window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});
const functionApiURL =
  "https://getresumecounter7.azurewebsites.net/api/GetResumeCounter?code=lkLov0Ett9OVOb3e3ddVPZQZuRI5ewOgD12OWrStnOd-AzFuhjc-Ag%3D%3D";
const localfunctionApi = "http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () => {
  let count = 30;
  fetch(functionApiURL)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Website called function API.");
      count = response.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};
