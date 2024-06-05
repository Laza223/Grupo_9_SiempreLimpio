document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input-search-admin');
    if (input) {
        input.addEventListener('keyup', searchUsers);
    } else {
        console.error("No se encontró el elemento con id 'input-search-users'");
    }
});

let searchUsers = () => {
    const input = document.getElementById('input-search-admin');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('table-search-admin');
    const tr = table.getElementsByTagName('tr');
    let matchFound

    for (let i = 1; i < tr.length; i++) { 
        const td = tr[i].getElementsByTagName('td')[1]; 
        if (td) {
            const txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                matchFound = true
            } else {
                tr[i].style.display = "none";
            }
            console.log(txtValue, filter, txtValue.toUpperCase().indexOf(filter));
        } else {
            console.error("No se encontró la celda en la fila " + i);
        }
    }
    if (!matchFound) {
        table.style.display = "none";
    } else {
        table.style.display = ""; 
    }
}
