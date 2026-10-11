---
name: new-post
description: Nytt inlägg på kristoferhallen.com, eller granskning av ett utkast. Använd när Kristofer vill publicera, schemalägga eller få feedback på ett inlägg, börja på en idé, eller lägga till en del i en serie.
---

# Nytt inlägg på kristoferhallen.com

Kristofer skriver inläggen själv. Claude hjälper med struktur, tydlighet,
fakta och allt runt omkring, och skriver inte om hans röst om han inte ber om
det. Kommunicera på svenska; bloggen är på engelska. Skrivstilen står i
`CLAUDE.md`.

## 1. Granska utkastet (om han vill ha feedback)

- Håller tesen? Står den tidigt, och slutar texten med konkret vägledning?
- Rubriker: titeln är `h1`, avsnitt börjar på `##`.
- Längd 400–2500 ord. Säg till om något kan strykas.
- Fakta och citat: kontrollera källor, böcker och siffror. Föreslå länkar.
- Koppling till tidigare inlägg och serier: föreslå interna länkar
  (`grep -l` i `content/posts/`).
- Ge förslag som en kort lista. Ändra bara i texten om han ber om det.

## 2. Skapa filen

- `content/posts/<slug>.md`. Slug: beskrivande, gemener med bindestreck
  (nyare inlägg, t.ex. `management-by-cookies`). Fråga om han har ett
  önskemål.
- Front matter:
  ```yaml
  ---
  title: "…"
  date: YYYY-MM-DD
  draft: false
  tags: [ … ]
  description: "…"        # en mening, för sökmotorer och delning
  series: ["…"]           # bara om inlägget ingår i en serie
  ---
  ```
- Taggar: återanvänd befintliga
  (`grep -h "^tags" content/posts/*.md | sort | uniq -c`).
- Serie: kontrollera att `content/series/<slug>/_index.md` finns, och att
  serien läses i rätt ordning (datum styr ordningen).

## 3. Publicera nu eller schemalägg

- **Nu:** dagens datum.
- **Schemalagt:** framtida datum. Inlägget publiceras av första bygget efter
  det datumet, alltså vid nästa push. Säg det tydligt: utan en push efter
  datumet kommer det inte ut.

## 4. Kontrollera

- `hugo --minify -d <scratchpad>` utan varningar, och att inlägget finns i
  utdata (eller inte, om det är schemalagt).
- Titta på inlägget i förhandsvisningen. Vid visuella frågor: `site-design`.

## 5. Commit och publicering

- **Lägg till filen med namn. Aldrig `git add -A`:** andra otrackade utkast
  med passerade datum skulle publiceras.
- Fråga innan commit och push. Kontrollera först `git log HEAD..origin/main`.
- Efter push: vänta på `gh run watch` och kontrollera adressen med `curl`.
- Om inlägget ersätter eller döper om ett annat: 301 i `static/.htaccess`.

## 6. Efteråt

- Erbjud ett utkast till Bluesky-inlägg (titel, en mening om tesen, länk).
  Kontot är `@kristoferhallen.com`. Klicka aldrig Post utan uttryckligt ok.
- Bocka av punkten i `docs/todo.md` om inlägget stod där.
