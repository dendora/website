# Brand & Print Assets

Nyomdai és márka-leszállítandó fájlok. Ezek **nem** a website build részei
(a `public/` mappa szolgálja ki a weboldal assetjeit), itt a dekorosnak /
nyomdának küldhető forrásfájlok vannak.

## `logo/`

| Fájl | Leírás |
|------|--------|
| `dendora-d-logo.svg` | A Dendora „D" jel vektoros (skálázható) változata. A `public/dendora-icon-512.png`-ből `potrace`-szel vektorizálva, `svgo`-val optimalizálva. Fekete kitöltés, átlátszó háttér, `viewBox 0 0 1576 1505`. |
| `dendora-d-logo.pdf` | Ugyanaz a logó valódi vektoros PDF-ben (`rsvg-convert`-tel exportálva), ha a logó külön kell. |

## `print/`

| Fájl | Leírás |
|------|--------|
| `dendora_iroda_felirat.png` | Az irodai névtábla felirat eredeti kompozit képe (1055×1491, RGB). Ez a jóváhagyott design forrása. |
| `dendora_iroda_felirat.pdf` | A fenti felirat egy az egyben, veszteségmentesen (Zip) beágyazva egy **A4** lapra, a vágójelekkel együtt. **Ezt a fájlt kell küldeni a dekorosnak.** |

### Megjegyzés a felbontásról

A felirat raszteres forrásból készült (nincs eredeti vektoros fájl a teljes
tábláról), így A4-en kinyomtatva ~128 dpi. Kisebb fizikai méretnél (pl. a
vágójelek mentén levágva, vagy A5-ön) arányosan élesebb. Ha méretfüggetlenül
tökéletes, vektoros tábla kell, a teljes feliratot újra kell építeni (vektor
logó + élő Inter szöveg + grafikai elemek).
