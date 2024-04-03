//==========================================navbar====================================
function opennav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle('overflow_hidden');
    document.getElementById("menubtn-icon").classList.toggle("cross");
}
// ===================================DEFINE-SCRIPT-YEAR ================================ */
const d = new Date();
document.getElementById("year_change").innerHTML = d.getFullYear();