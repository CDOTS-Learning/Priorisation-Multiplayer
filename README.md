# Prioritization — Multiplayer

A facilitated sorting exercise for **2–5 players plus a facilitator**. The group
sorts 24 learning services into **Yes / Maybe / No** together — one person holds
the pen at a time, everyone else watches live and can take over.

- **Live:** https://priorisation-multiplayer-nnsm.onrender.com
- **Single-player version:** [`Priorisation-Singleplayer`](https://github.com/CDOTS-Learning/Priorisation-Singleplayer) — same exercise for one participant

## How a session runs

1. The facilitator opens the start page, enters a name and creates a session.
2. They share the six-character room code; the players join from the same start
   page. At least two players are needed to start.
3. The facilitator presses **Start**. One player holds the pen and sorts the
   current card into Yes, Maybe or No; the others see the same screen live.
   Anyone can press **Take control** to take the pen.
4. The facilitator always sees the card being sorted, the category explanations
   and the terms already placed — with or without the pen — so they can answer
   questions at any point.
5. When all 24 cards are sorted, the group sees the **Yes / Maybe / No**
   overview and can still move cards between the columns. From there:
   **Save as PDF**, **Run it again**, or **End session**.

Nothing is stored. When the session ends, the room is gone — save the PDF first
if the result matters.

## Changing the text

Almost everything lives in **`shared/content.ts`**:

| What | Where |
|---|---|
| The 24 cards — name and the small explanation under it | `CARDS` (each entry has `id`, `name`, `description`) |
| The category names Yes / Maybe / No | `GROUP_LABEL` |
| The explanation under each category | `GROUP_DESC` |
| The question on the start page | `FRAMING` |

Screen text, headings and buttons: `client/src/pages/` (`home.tsx`,
`game.tsx`, `facilitator.tsx`). Look and feel: `client/src/training.css`.
The PDF export is built in `facilitator.tsx` (`overviewDoc`).
The player limit is `MAX_PLAYERS` at the top of `server/storage.ts`.

**Adding or removing cards** is safe — the deck adapts. Keep each `id` unique.

> This repo and `Priorisation-Singleplayer` share three files byte for byte:
> `shared/content.ts`, `client/src/components/game-parts.tsx` and
> `client/src/training.css`. Change a text in one, copy the file to the other,
> so the two versions do not drift apart.

## Running it locally

```
npm install
PORT=5050 npm run dev      # then open http://localhost:5050
```

Port 5000 is taken by AirPlay on macOS, hence the `PORT=5050`.
To try a real session, open several browser tabs (or private windows): one
creates the session, the others join with the room code.

## How it is deployed

Render Web Service, runtime **Node**:

- Build command: `npm install && npm run build`
- Start command: `npm start`
- No environment variables, no database.

Every push to `main` triggers a new deployment automatically (about 3 minutes).
The service runs on the team's own Render account — see `RENDER-SETUP.md` for
how it is set up and what to do when a deployment misbehaves.

> **An older copy may still answer at https://priorisation-multiplayer.onrender.com.**
> That one belongs to the previous maintainer's personal account, receives no
> updates and will disappear. Always share the link at the top of this page.

## Good to know

- **Free hosting:** the first visit after a quiet period takes ~30 seconds while
  the server wakes up. Open the link a minute before a workshop starts.
- **No database, on purpose.** Results exist only while the session is open.
- Players who lose their connection can rejoin with the same name and keep their
  place.
- A `PostCSS ... 'from' option` warning during the build is harmless and has
  always been there.

## Where things live

```
client/src/pages/        start page, player view, facilitator view
client/src/components/   the card, the sorting stage, the overview board
client/src/training.css  all styling
shared/content.ts        the cards and the category texts  ← start here
shared/schema.ts         the shape of the game state
server/routes.ts         the live connection (Socket.IO events)
server/storage.ts        rooms, players, who holds the pen, the rules
```

## Handover

See **`HANDOVER.md`** (what you are taking over and how to change things) and
**`RENDER-SETUP.md`** (the hosting, which still needs an owner).
