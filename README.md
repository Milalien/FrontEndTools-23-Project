# FrontEndTools1

Frond end työkalut -kurssin harjoitukset ja lopputehtävä(Lipunmyynti).
Kurssin oppimistavoitteena oli opetella Angularin käyttöä mahdollisimman monipuolisesti.

## Käyttö

Kun avaat ohjelman ensimmäisen kerran (ng serve --open käskyllä), se ohjaa sinut suoraan Laskin-sivulle. Yläpalkin kautta voit navigoida tehtävien välillä.


### Laskin

Yksinkertainen perinteisen näköinen laskin. Toimii klikkaamalla, siihen ei voi suoraan kirjoittaa. 

### Palautelomake

Palautelomake joka toimii slidereilla.

### Template driven form

Mallipohjainen lomake.

### Reactive form

Angularin Reactiveformsmodule:lla tehty lomake.

### Elokuvauutiset

Sivulle haetaan uutisia Finnkinon XML sivulta. Voit filtteröidä uutisia hakukentän avulla.

### Kirjautumissivu

Kirjautumissivu, jossa voi esimerkkitunnusten avulla kirjautua "Admin" näkymään. Toimi harjoituksena Firebasen käytön kanssa.

### Lipunmyynti

Tenttitehtävä. Sivulla on lomake, jolla voit tilata lippuja. Se laskee loppusumman suoraan, saat alennusta jäsenyyden klikkamalla. Tilauksen lähetysvaiheessa sen tiedot välittyvät TilausService-luokkaan taulukkoon, joka toimii väliaikaisena ratkaisuna back-endin puuttumisen johdosta. Tilauksen tiedot tulostuvat konsoliin Service-luokasta hakemalla tilauksen lähetysvaiheessa.


