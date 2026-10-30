---
title: "What Anything Is Worth"
tags: ["Economics", "First Principles", "Valuation", "Bonds", "Stocks"]
date: 2026-10-30
draft: true
series: "Economics from Scratch"
series_order: 3
summary: "One recipe prices everything: list the money it will bring, discount it to today, add it up. Worked through a bond, Sam's tutoring center, land, a skill, stocks and a startup, and then why all of them move together when interest rates change."
---

[Part 2](/posts/economics-price-of-time/) built two tools: compounding moves money forward in time, and discounting brings it back. This part uses discounting for what it's really for: working out what something is worth.

The whole part rests on one idea:

> **What something is worth today = all the money it will bring in the future, discounted back to today.**

Bonds, businesses, land, skills, stocks and startups all get priced with that same recipe. Only the stream of money changes. As before, I've kept the questions I had along the way and what cleared them up.

---

## Value, Worth and Price

These three words get used loosely, but they mean different things.

| Term | What it means | Example |
| --- | --- | --- |
| **Willingness to pay** | The most a particular person would give up for something | Tutoring is worth $250 a month to a parent |
| **Intrinsic value** | All of something's future benefits, discounted to today | Sam's center is worth $90,000 to a buyer |
| **Market price** | What someone actually pays | A buyer pays Sam $85,000 |

Willingness to pay is the "value" from Part 1, set at the margin. Intrinsic value is what finance means by what something is worth, and the method for working it out is called a **discounted cash flow** valuation. Market price is where a buyer and a seller, who often disagree about intrinsic value, manage to meet.

You'll also hear **book value**: what a company's accounts say its assets are worth, mostly based on what they cost. As we'll see, what something cost in the past doesn't decide what it's worth.

### The recipe

1. **Forecast** every future benefit: profits, interest, rent, a sale later on.
2. **Convert** each into an amount of money and a date.
3. **Pick a discount rate**: what your money could earn elsewhere at similar risk.
4. **Discount** each amount to today and add them up.
5. If there's more than one way to use the thing, it's worth the **best** one.

Everything comes down to two inputs: the forecast and the rate. When people disagree about what something is worth, they almost always disagree about one of those two.

{{< stuck "Is something worth only what it earns in the future? Nothing else?" >}}
In principle, yes, but "what it brings" is broader than profit. Each benefit just has to be turned into an amount of money and a date:

- **Selling it later** counts. The sale price is one more future payment.
- **Things it owns** count. If a business could be shut down and its equipment sold for $3,000, that's a plan worth $3,000. The business is worth the better of running it or selling it off, so its assets act as a floor.
- **Benefits that aren't money** count too. If I own the home I live in, I don't pay rent. If similar places rent for $2,000 a month, owning gives me $24,000 a year of value, even though no cash arrives.

What doesn't count is the past: what it cost, how hard it was to build, what it used to earn. And anything I can't put a number on, like the pride of owning a business, this method can't capture. That's one more reason people disagree about what things are worth.
{{< /stuck >}}

---

## A Bond

A **bond** is a loan you can buy. You lend money to a government or a company, and they promise a fixed schedule of payments back. Three terms describe it:

- **Face value:** the amount you get back at the end, say $1,000.
- **Coupon:** the fixed interest paid each year, say $40, which is 4% of $1,000.
- **Maturity:** when it ends, say in 3 years.

So this bond pays $40, $40, then $1,040: the last coupon plus the $1,000 back. Discount each payment at 4%, the going rate for similar safe loans:

| Payment | When | Calculation | Worth today |
| --- | --- | --- | --- |
| $40 | 1 year | $40 ÷ 1.04 | $38.46 |
| $40 | 2 years | $40 ÷ 1.04² | $36.98 |
| $1,040 | 3 years | $1,040 ÷ 1.04³ | $924.56 |
| **Total** | | | **$1,000.00** |

It's worth exactly $1,000, which makes sense: it pays 4%, and 4% is the going rate.

### When the going rate changes

There are two different rates here, which is what makes bonds confusing at first:

- **The coupon rate** (4%) is written into the contract. It never changes, so the payments never change.
- **The going rate** is what new, similar bonds pay today. That's the discount rate, and it moves with the market.

Say rates rise and new bonds now pay 6%. Same payments, discounted at 6%:

| Payment | When | Calculation | Worth today |
| --- | --- | --- | --- |
| $40 | 1 year | $40 ÷ 1.06 | $37.74 |
| $40 | 2 years | $40 ÷ 1.06² | $35.60 |
| $1,040 | 3 years | $1,040 ÷ 1.06³ | $873.20 |
| **Total** | | | **$946.54** |

And if rates fell to 2%, the same bond would be worth $1,057.69. So the fair market price of this bond is $946.54 when the going rate is 6%, and $1,057.69 when it's 2%. The rate goes in, the price comes out.

{{< stuck "Why discount it at all? Isn't it just interest on what I paid?" >}}
I was mixing up two questions.

**What will I receive?** I paid $1,000 and the bond pays 4% on that, so I get $40, $40 and $1,040. No discounting needed. That's fixed by the contract and doesn't change whatever rates do.

**What is the bond worth today, if I want to sell it?** That's where discounting comes in. Once new bonds pay 6%, a buyer can spend $1,000 on a new one and get $60, $60, $1,060. Mine only pays $40, $40, $1,040, so nobody will give me $1,000 for it. The question becomes: how much money, earning 6% elsewhere, would produce exactly my bond's payments? That amount is the most anyone will pay for it.
{{< /stuck >}}

{{< stuck "If I put $946.54 in a 6% account, shouldn't it stay at $946? Why does it grow while I take money out?" >}}
To show that $946.54 and the bond are interchangeable, the account has to pay out exactly what the bond does: $40, $40, then $1,040. And it is compounding: whatever stays in keeps earning 6% on the new balance.

The interest on $946.54 at 6% is $56.79, but the bond only pays out $40. So each year the account earns more than I take out, and the extra stays in:

| Year | Start | Interest at 6% | Taken out | End |
| --- | --- | --- | --- | --- |
| 1 | $946.54 | $56.79 | $40 | $963.33 |
| 2 | $963.33 | $57.80 | $40 | $981.13 |
| 3 | $981.13 | $58.87 | $1,040 | $0 |

The balance climbs to exactly $1,040 by the end, and pays out exactly what the bond does. Same payments, so same worth.

This also showed me how a buyer at $946.54 gets their 6%: about 4% from the coupons, plus the price climbing back up to the $1,000 they get at the end. A bond bought below $1,000 drifts back toward $1,000 as it nears maturity. So if I simply hold my bond to the end, a rise in rates doesn't cost me anything. It only costs me if I sell early.
{{< /stuck >}}

{{< stuck "What if a year has already passed when rates change to 6%?" >}}
Only the payments still to come matter, each discounted by how far away it is from today. One year in, the first $40 is already paid, so what's left is $40 in a year and $1,040 in two:

| Payment | When (from today) | Calculation | Worth today |
| --- | --- | --- | --- |
| $40 | 1 year | $40 ÷ 1.06 | $37.74 |
| $1,040 | 2 years | $1,040 ÷ 1.06² | $925.60 |
| **Total** | | | **$963.33** |

That's the same as the account balance after year 1 in the table above, since both answer the same question. The loss is smaller with two years left than with three, because I'm stuck with the below-market 4% for less time. It's the same reason long bonds fall much more than short ones when rates rise.
{{< /stuck >}}

### Yield

Bond traders usually talk about **yield** instead of price. Yield runs the calculation backward: given the price, what return do you earn by buying the bond and holding it to the end? Formally, it's the discount rate that makes the remaining payments add up to the current price.

| You pay | You receive | Your yield |
| --- | --- | --- |
| $1,000 | $40, $40, $1,040 | 4% |
| $946.54 | $40, $40, $1,040 | 6% |

Same payments. Pay less and you earn more. That's why **bond prices and yields always move in opposite directions**: they're two ways of describing the same thing. The coupon rate and the yield are equal only when the bond trades at exactly $1,000.

So when the news says "the 10-year Treasury yield rose," it means prices of 10-year US government bonds fell, and the going rate for lending to the government for 10 years went up. Since that's the safe layer underneath nearly every discount rate, everything else in the economy is now discounted a little more steeply.

---

## Sam's Center

Sam's center earns $600 a month in profit, so $7,200 a year. A buyer wants to purchase the whole business. What's a fair price?

Same recipe: discount every future year's profit and add them up. A small business is risky, so a buyer might use 8%. If the profit continues indefinitely, there's a shortcut for an endless stream:

> Value = Yearly amount ÷ Rate

$7,200 ÷ 0.08 = **$90,000**.

One way to see it: $90,000 in an account paying 8% pays $7,200 a year forever, without ever touching the $90,000. Owning the center and owning $90,000 at 8% give the same stream of money, so they're worth the same.

Notice what didn't matter: what Sam paid for desks and books. The center is worth what it will earn, not what it cost.

{{< stuck "How can profits forever be worth only $90,000?" >}}
Because money far in the future is worth almost nothing today. Each $7,200 is the same size, but the further away it is, the less it counts:

| Year the $7,200 arrives | Worth today |
| --- | --- |
| 1 | $6,667 |
| 10 | $3,335 |
| 20 | $1,545 |
| 50 | $154 |
| 100 | $3 |

Adding them up in chunks:

| Years | Total worth today |
| --- | --- |
| 1 to 10 | $48,313 |
| 11 to 20 | $22,378 |
| 21 to 50 | $17,390 |
| 51 to 100 | $1,878 |
| After 100 | $41 |
| **All of them** | **$90,000** |

The first 20 years give almost 80% of the value, and the endless tail after year 100 adds $41. The total keeps creeping up but never passes $90,000, the same way ½ + ¼ + ⅛ + … never passes 1.

It's the same thing as a discounted sum of rewards in reinforcement learning: with a constant reward and a discount factor below 1, an infinite horizon still has a finite value. Here the discount factor is 1/1.08 ≈ 0.926.
{{< /stuck >}}

{{< stuck "If Sam sells in year 5 instead of keeping it forever, doesn't that change what it's worth?" >}}
No, as long as she sells at a fair price. In year 5, the next buyer pays for the profits from year 6 onward. Standing in year 5, that endless stream looks exactly like the one above, so they pay $90,000.

So selling doesn't give up the later profits. It collects them all at once:

- Profits in years 1 to 5, worth today: **$28,748**
- Profits in year 6 onward, worth today: $90,000 − $28,748 = **$61,252**
- The $90,000 sale in year 5, worth today: $90,000 ÷ 1.08⁵ = **$61,252**

Same number. Selling would only change the total if the buyer paid more or less than the stream is worth, for example if they were more optimistic about growth.
{{< /stuck >}}

### Growth

So far I assumed Sam's profit stays at $7,200 forever. If profits are expected to grow, every later year's payment is bigger, and the whole stream is worth more. The shortcut becomes:

> Value = Next year's profit ÷ (Rate − Growth rate)

Discounting shrinks future money; growth enlarges it. The formula nets the two against each other. With an 8% rate and $7,200 next year:

| Expected profit growth per year | Calculation | Value today |
| --- | --- | --- |
| 0% | $7,200 ÷ 0.08 | $90,000 |
| 3% | $7,200 ÷ 0.05 | $144,000 |
| 5% | $7,200 ÷ 0.03 | $240,000 |
| 7% | $7,200 ÷ 0.01 | $720,000 |

Same business, same profit today. Only the expectation about growth changed, and the value went from $90,000 to $720,000.

Two lessons come out of this table. First, **expectations about growth can matter more than current profit.** That's why some companies with small profits today are worth enormous amounts. Second, **values are extremely sensitive when growth gets close to the rate.** Small changes in what people believe about the future cause big changes in price, which is a large part of why markets are jumpy and why bubbles happen.

(The formula only works when growth is below the rate. If something grew faster than the rate forever, it would be worth infinite money, which is a sign that no growth lasts forever.)

One more thing follows: a price is based on people's **guesses** about future profits, and guesses can be optimistic, scared or wrong. That's why market prices swing far more than the businesses underneath them.

---

## Land and Skills

### Land

Land doesn't produce profit by itself. Its benefit is that someone will pay to use it. So:

> Land worth = Yearly rent it can earn ÷ Rate

Sam's lot could be rented out for $1,000 a year. At 5%, a fairly safe stream, it's worth $1,000 ÷ 0.05 = **$20,000**.

Then the subway station from Part 1 opens nearby. The spot can now earn $2,000 a year in rent: $2,000 ÷ 0.05 = **$40,000**. Nothing about the land changed. The future rents doubled, and the price jumped the moment people expected it, before a single extra dollar of rent was paid.

Now change only the rate. Rents stay at $1,000, but rates fall to 4%: $1,000 ÷ 0.04 = **$25,000**. The land got 25% more valuable with no subway and no new building. That's why housing booms tend to follow low interest rates.

And if rents are expected to grow 2% a year, the growth formula gives $1,000 ÷ (0.05 − 0.02) = **$33,333**. Every valuation here has the same three dials: what it pays now, how fast that grows, and the rate.

### A skill

Leo, one of Sam's tutors, is deciding whether to take a $5,000 course that would raise his pay by $200 a month, $2,400 a year, for the 20 years he plans to keep teaching. At 5%:

| Scenario | Extra pay | How long | Worth today |
| --- | --- | --- | --- |
| The skill stays in demand | $2,400 a year | 20 years | $29,909 |
| AI makes it common after 5 years | $2,400 a year | 5 years | $10,391 |
| AI also halves the raise | $1,200 a year | 5 years | $5,195 |

In the first case, the course is a great deal: pay $5,000, get $29,909 of value. In the last, it barely breaks even.

This is the human capital point from Part 1, now with numbers. A skill is worth the extra income it brings, discounted to today. AI doesn't have to destroy a skill to hurt it. It only has to shorten how long the skill pays, or shrink how much it pays.

---

## Stocks

A company's stock is divided into shares. Owning a share means owning a slice of the company's future profits, which the company either pays out (as **dividends**) or reinvests to grow. So:

> Company worth = All future profits, discounted to today
> Share worth = Company worth ÷ Number of shares

The total price of all the shares is the company's **market cap**. Stock prices move every day because millions of people keep updating their forecasts and rates as news arrives.

For stocks, the discount rate is usually built in two layers:

> Discount rate = Safe rate + Extra for risk

The safe rate is what lending to the US government pays, which is tied to the Fed. The extra for risk, called the **equity risk premium**, is what investors demand for holding something that can fall. Say 4% plus 4%, giving the 8% used for Sam.

### The P/E ratio

You'll often hear the **price-to-earnings ratio**, or P/E: the share price divided by yearly profit per share. A P/E of 20 means investors pay $20 for every $1 of yearly profit.

It comes straight from the growth formula. Start with Price = Profit ÷ (Rate − Growth) and divide both sides by the profit:

> P/E = 1 ÷ (Rate − Growth)

With an 8% rate and 3% growth, 1 ÷ 0.05 = 20. You can run it backward too: a P/E of 25 means the market is pricing in a rate only 4 points above long-run profit growth. So **a high P/E means the market expects strong growth, uses a low rate, or both.**

It's a simplification. It assumes profits are paid out and grow steadily forever. Real P/Es are just prices divided by profits; the formula is a way to read them.

{{< stuck "Does a P/E of 20 really assume the company earns forever?" >}}
Yes. And growth pushes even more of the value into the far future, because the later payments are bigger. With an 8% rate and 3% growth, here's where the 20 comes from:

| Profits from | Share of the 20 | Share of total value |
| --- | --- | --- |
| Years 1 to 10 | 7.6 | 38% |
| Years 11 to 20 | 4.7 | 23% |
| Years 21 to 50 | 5.9 | 29% |
| After year 50 | 1.9 | 10% |

More than 60% of the value comes from profits more than 10 years away. In practice, analysts forecast a company year by year for 5 to 10 years and then assume something simple for everything after. That "everything after" is called the **terminal value**, and for growing companies it's often more than half the total.

So a P/E is a compressed bet that the company keeps going and growing for a very long time. That's also where AI shows up in valuation: if investors start believing AI will disrupt a company's business in 10 years, the long tail of its value is at risk, and the stock can fall today even though this year's profits are fine.
{{< /stuck >}}

{{< stuck "What's a normal P/E?" >}}
For the S&P 500, the index of 500 large US companies that people usually mean by "the market":

| | P/E |
| --- | --- |
| Long-run average since 1871 | about 16 |
| October 2026, using last year's profits | about 26 |
| October 2026, using expected profits for the next 12 months | about 19 |
| 10-year average, on expected profits | about 19 |

There are two versions because the "E" can be last year's actual profits (**trailing**) or analysts' forecast for the coming year (**forward**). Forward is lower because profits are expected to rise.

A few points in history help: about 7 in 1980, when high inflation and rates made stocks cheap; about 29 in 2000, at the peak of the dot-com bubble; and about 71 in 2009, not because prices were high but because profits had collapsed in the financial crisis. A strange P/E can come from the E side, not just the P side.

Sources: [FactSet](https://insight.factset.com/sp-500-earnings-season-update-october-23-2026), [Multpl](https://www.multpl.com/s-p-500-pe-ratio/table/by-year).
{{< /stuck >}}

---

## Startups

A startup usually has no profit and often little revenue, so there's no steady stream to forecast. Investors think in **scenarios** instead.

Say a startup is building an AI tutor, a direct competitor to Sam. An investor might picture where it could be in 8 years:

| Outcome | Chance | Company worth then |
| --- | --- | --- |
| Becomes a major player | 5% | $2 billion |
| Decent business, gets acquired | 20% | $100 million |
| Fails | 75% | $0 |

Weighted by chance, that's 5% × $2 billion + 20% × $100 million = **$120 million** expected in 8 years. It's far off and uncertain, so investors discount steeply, say 25% a year: $120 million ÷ 1.25⁸ ≈ **$20 million** today.

If the investor puts in $4 million for 20% of the company, that implies the whole company is worth $20 million. That's what a startup's **valuation** is: the price implied by a funding deal, not a measured worth.

Three things stand out:

- **Most of the worth comes from the rare big win.** The 5% scenario supplies $100 million of the $120 million. So investors care most about how big a company could get, not its current profit.
- **Most startups fail, and that's priced in.** A venture fund expects to lose money on most bets and make it back on a few huge winners.
- **In practice, price comes from negotiation.** Investors compare with what similar startups raised at, weigh the team and the market, and compete with each other. When many investors want in, the price goes up regardless of anyone's spreadsheet, which is how hype pushes valuations up and why they can crash when sentiment turns.

---

## Why Everything Moves When Rates Change

Every valuation in this part divided future money by a discount rate. Every discount rate sits on top of the safe rate, and the safe rate follows the Fed. So when rates move, everything gets repriced at once.

**Bonds.** The bond from earlier is worth $1,057.69 at 2%, $1,000 at 4%, and $946.54 at 6%. Longer bonds move much more: a 30-year bond paying 4% would fall from $1,000 to about $725 if rates went to 6%, because so much of its money is far in the future.

**Stocks.** Raise the discount rate by one point:

| Company | P/E at an 8% rate | P/E at a 9% rate | Change |
| --- | --- | --- | --- |
| Steady, 3% growth | 20 | 16.7 | −17% |
| Fast-growing, 6% growth | 50 | 33 | −33% |

Same profits, lower prices. And fast-growing companies fall harder, because more of their value sits far in the future, where a higher rate shrinks it most. That's why tech stocks swing more than utilities when the Fed moves.

**Land and housing.** Sam's lot earning $1,000 a year is worth $20,000 at 5% and $16,667 at 6%. Mortgages also get more expensive, so buyers can afford less.

**Startups.** Investors discount even more steeply, and safe returns look better, so less money flows into risky bets.

**Skills.** Leo's course is worth less at a higher rate too, though nobody quotes a price for it.

It works in reverse as well. When rates fall, all of these rise together, often with no change in the businesses underneath, which is why long stretches of low rates tend to bring booms in asset prices.

In 2022, the Fed raised rates very quickly to fight inflation. Bonds had one of their worst years in decades, stocks fell, fast-growing tech stocks fell the most, and startup funding dried up. For most of those companies, nothing about their products changed that year. The discount rate did.

{{< stuck "Why do yields go up when inflation rises or the Fed tightens? And why would a booming economy raise them?" >}}
What connected it for me: yields are set by the people buying and selling bonds. A yield goes up whenever lenders demand a better return before they'll lend. They show it by paying less for bonds, and a lower price means a higher yield. Each case pushes up one part of the interest rate from Part 2.

**The Fed tightens.** If banks and big savers can earn 5% overnight with no risk, nobody will lend to the government for a year at 4%. They sell those bonds, the price falls, and the yield rises until it's competitive. Longer bonds also move on what people expect the Fed to do over the coming years, so even a hint of future hikes pushes yields up.

**Inflation rises.** A bond paying 4% loses buying power if prices rise 5% a year. Lenders demand a yield that covers expected inflation plus something extra. And since the Fed fights inflation by raising rates, rising inflation also makes people expect hikes.

**The economy booms.** More businesses and households want to borrow, which lets lenders charge more. Investors sell safe bonds to buy stocks that could earn more, which pushes bond prices down. And a hot economy makes people expect inflation and Fed hikes.

In one line: yields rise when lenders demand more to lend, because safe money pays more elsewhere, because money will buy less, or because money has better uses.
{{< /stuck >}}

{{< stuck "So when yields go up, everything is worth less?" >}}
Mostly, but only all else equal. It depends on why yields rose.

If they rise because of inflation worries or the Fed tightening, the rate dial goes up and nothing else improves, so things fall. That's 2022.

If they rise because the economy is booming, the rate dial goes up but so does the growth dial, since companies are expected to earn more. The two can cancel out, and stocks can even rise alongside yields.

And not everyone loses. Higher yields are good for anyone putting money to work now: savers earn more, and new bond buyers lock in better returns. Rising rates shift value from people who already own assets to people buying them fresh.
{{< /stuck >}}

---

## What's Next

This part used one recipe for everything: list the money something will bring, discount it to today, and add it up. Bonds, Sam's center, land, skills, stocks and startups differ only in their stream of money. Three dials drive the answer: what it pays, how fast that grows, and the discount rate. And because the Fed anchors every discount rate, a change in rates reprices all of them at once.

Part 4 is about markets: how buyers and sellers actually arrive at a price through supply and demand, what stock, bond, commodity and currency markets do, and what's really happening when people say "the market is up."
