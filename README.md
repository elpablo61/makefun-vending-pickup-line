# One Line, One Minute: The Vending Machine Pickup Line Contest

[![u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/elpablo61/makefun-vending-pickup-line/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![entries](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/elpablo61/makefun-vending-pickup-line/entries.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/elpablo61/makefun-vending-pickup-line/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

One pickup line, spoken by a vending machine to a passing human. The program
writes a single line to `/output/entry.txt` (78 characters, well under the
200-character gate).

> Press B7. That's my code for the cute one staring at the chips. Come closer.

## Why this line

The machine speaks in its own language: a button code, not a bar line. B7
sounds like a snack slot until the last two words reveal the code is for the
human, not the chips — the punch lands at the very end, in one breath, cheeky
rather than creepy.

## How it was picked

Five variants were written past the obvious first ideas ("Are you a snack?",
"insert a coin", "I'm out of order"), then pairwise-judged twice per pair
(positions swapped) against the judge brief's rubric — machine voice first,
then machine world, laugh with the punch last, short and speakable, charming
not creepy — and the winner got a humanizer pass (no em-dash stacks, no
AI-tell phrasing).

## Run

```sh
node main.ts
# writes entry.txt to $MAKEFUN_OUTPUT_DIR (default /output)
```

## License

MIT — see [LICENSE](LICENSE).
