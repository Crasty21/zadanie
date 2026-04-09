$(document).ready(function () {

    let students = [
        {id:1, imie:"Jan", nazwisko:"Kowalski", wiek:21, email:"jan@example.com", kierunek:"Informatyka"},
        {id:2, imie:"Anna", nazwisko:"Nowak", wiek:22, email:"anna@example.com", kierunek:"Matematyka"},
        {id:3, imie:"Piotr", nazwisko:"Wiśniewski", wiek:20, email:"piotr@example.com", kierunek:"Fizyka"}
    ];

    let table = $('#studentsTable').DataTable({
        data: students,
        columns: [
            { data: 'id' },
            { data: 'imie' },
            { data: 'nazwisko' },
            { data: 'wiek' },
            { data: 'email' },
            { data: 'kierunek' },
            {
                data: null,
                render: function () {
                    return '<button class="edit">Edytuj</button><button class="delete">Usuń</button>';
                }
            }
        ],
        paging: true,
        searching: true,
        ordering: true,
        lengthMenu: [10, 25, 50],
        dom: 'Bfrtip',
        buttons: ['csv', 'pdf']
    });

    $('#studentsTable tbody').on('click', '.delete', function () {
        table.row($(this).parents('tr')).remove().draw();
    });

    $('#studentsTable tbody').on('click', '.edit', function () {
        let row = table.row($(this).parents('tr'));
        let data = row.data();
        let nowyWiek = prompt("Podaj nowy wiek:", data.wiek);
        if (nowyWiek !== null) {
            data.wiek = parseInt(nowyWiek);
            row.data(data).draw();
        }
    });

});