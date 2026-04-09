# # DataTables – Lista studentów

## 📌 Opis projektu

Projekt przedstawia wykorzystanie biblioteki DataTables do wyświetlania i zarządzania danymi studentów w tabeli HTML.

Tabela zawiera informacje takie jak:

* ID
* imię
* nazwisko
* wiek
* email
* kierunek studiów

## 🚀 Uruchomienie projektu

1. Pobierz lub sklonuj repozytorium
2. Otwórz plik `index.html` w przeglądarce

Projekt działa lokalnie bez potrzeby uruchamiania serwera.

## ⚙️ Wykorzystane funkcje DataTables

* sortowanie kolumn
* wyszukiwanie danych
* paginacja
* zmiana liczby wyświetlanych rekordów (10, 25, 50)
* eksport danych do CSV i PDF

## ✏️ Funkcjonalności dodatkowe

* usuwanie wiersza z tabeli (przycisk „Usuń”)
* edycja danych (zmiana wieku przez prompt)
* dodatkowe kolumny: email, kierunek studiów

## 📂 Źródło danych

Dane studentów są zapisane bezpośrednio w pliku JavaScript (tablica obiektów), co pozwala na uruchomienie projektu bez serwera.

## 🛠 Technologie

* HTML
* CSS
* JavaScript
* jQuery
* DataTables

## 📎 Uwagi

W pierwotnej wersji projektu dane były wczytywane z pliku JSON (AJAX), jednak ze względu na ograniczenia przeglądarki (CORS) przy uruchamianiu lokalnym, zastosowano dane wbudowane w kodzie JavaScript.
