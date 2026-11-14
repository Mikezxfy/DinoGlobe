# Dinosauří glóbus (webová aplikace)

Instalovatelná webová aplikace (PWA). Po instalaci běží na celou obrazovku s vlastní ikonou a funguje i bez připojení.

## Nasazení na GitHub Pages

1. Na GitHubu založ nový veřejný repozitář, třeba `dinoglobus`.
2. Nahraj do něj obsah této složky (Add file → Upload files). `index.html` musí být v kořeni repozitáře.
3. V repozitáři otevři Settings → Pages, jako zdroj zvol větev `main` a složku `/ (root)` a ulož.
4. Za minutu až dvě poběží aplikace na `https://<tvoje-jméno>.github.io/dinoglobus/`.

## Instalace

- **Android (Chrome):** otevři adresu, v nabídce ⋮ zvol „Přidat na plochu“ nebo „Nainstalovat aplikaci“.
- **iPhone (Safari):** tlačítko Sdílet → „Přidat na plochu“.
- **Počítač (Chrome, Edge):** ikona instalace v adresním řádku.

Instalace vyžaduje HTTPS, což GitHub Pages splňuje. Otevření `index.html` přímo z disku funguje jen jako obyčejná stránka, bez instalace a offline režimu.

## Aktualizace

Po změně souborů zvyš v `sw.js` číslo v `VERSION` (např. `dinoglobus-v2`). Jinak zůstanou zařízení u uložené staré verze.

## Soubory

- `index.html` – celá aplikace včetně dat a fotek
- `manifest.webmanifest` – název, barvy a ikony aplikace
- `sw.js` – offline režim
- `lib/` – three.js r128, OrbitControls, earcut 2.2.4
- `icons/` – ikony s kostrou dinosaura

## Zdroje dat

Rotace desek a hranice: Matthews a kol. 2016. Paleogeografie: Cao a kol. 2017. Nástroje a data GPlates / EarthByte. Fotky: Wikimedia Commons, autoři a licence jsou uvedeni u každého obrázku v aplikaci.
