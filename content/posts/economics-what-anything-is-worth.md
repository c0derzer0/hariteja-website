---
title: "What Anything Is Worth"
tags: ["Economics", "First Principles", "Valuation", "Bonds", "Stocks"]
date: 2026-10-30
draft: false
series: "Economics from Scratch"
series_order: 3
summary: "One recipe prices everything: list the money it will bring, discount it to today, add it up. Worked through a bond, Sam's tutoring center, land, a skill, a stock and a startup, and then why all of them move together when interest rates change."
---

[Part 2](/posts/economics-price-of-time/) built two tools: compounding moves money forward in time, and discounting brings it back. This part uses discounting for what it's really for: working out what something is worth.

The whole part rests on one idea:

> **What something is worth today = all the money it will bring in the future, discounted back to today.**

Bonds, businesses, land, skills, stocks and startups all get priced with that same recipe. Only the stream of money changes.

As before, I've kept the questions I had along the way and what cleared them up.

---

## Value, Worth and Price

These words get used loosely, but each means something specific:

- **Willingness to pay:** the most a particular person would give up for something. This is the "value" from Part 1, set at the margin, and it differs from person to person.
- **Intrinsic value:** what something is worth based on everything it will bring in the future, discounted to today. This is what finance means by "what it's worth."
- **Discounted cash flow (DCF):** the method for working out intrinsic value. List the money something will bring, discount each amount to today, and add them up.
- **Market price:** what someone actually pays.
- **Book value:** what the accounts say something is worth, mostly based on what it cost.

Sam decides to sell her tutoring center. Four different numbers describe it:

| Number | Amount | Where it comes from |
| --- | --- | --- |
| Book value | $4,000 | What Sam paid for the desks, books and laptops |
| Intrinsic value to a buyer | $90,000 | The buyer's estimate of all future profits, discounted (worked out later in this post) |
| Sam's lowest acceptable price | $80,000 | What the center is worth to Sam if she keeps running it herself |
| Market price | $85,000 | What they agree on |

**Book value barely matters.** The desks cost $4,000, but nobody pays $85,000 for desks. The buyer pays for the profits the center will earn.

**Intrinsic value depends on who's asking.** To the buyer it's worth $90,000. To Sam, who would rather keep it than sell cheap, it's worth $80,000. Neither is wrong. They have different forecasts or different alternatives for their money.

**Price lands between them.** Any price from $80,000 to $90,000 leaves both better off than not trading. Where exactly it lands, $85,000 here, comes down to negotiation and bargaining power, just like the split of value in Part 1.

That's the general pattern: intrinsic value is an estimate each person makes, and market price is where two people with different estimates meet.

### The recipe for intrinsic value

1. **Forecast** every future benefit: profits, interest, rent, a sale later on.
2. **Lay out the timeline:** turn each benefit into a dollar amount on a specific date. Discounting needs both, because how much a payment is worth today depends on how far away it is.
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

Bonds come with their own vocabulary:

- **Bond:** a loan you can buy. You lend money to a government or a company, and they promise a fixed schedule of payments back.
- **Face value:** the amount repaid at the end.
- **Coupon:** the fixed interest paid each year. The **coupon rate** is the coupon as a share of face value. It's written into the contract and never changes.
- **Maturity:** when the bond ends and the face value is repaid.
- **Going rate:** what new, similar bonds pay today. It's the discount rate for valuing a bond, and it moves with the market.
- **Yield:** the return you'd earn by buying a bond at today's price and holding it to the end.

A 3-year US government bond with a face value of $1,000 and a 4% coupon. It pays $40 at the end of year 1, $40 at the end of year 2, and $1,040 at the end of year 3: the last coupon plus the $1,000 back.

| Step | For this bond |
| --- | --- |
| 1. Forecast | $40 of interest a year, plus $1,000 back at the end. Fixed by the contract, so no guessing. |
| 2. Timeline | $40 in year 1, $40 in year 2, $1,040 in year 3 |
| 3. Rate | 4%, what similar safe loans pay today |
| 4. Discount and add | The table below |
| 5. Best use | Hold it or sell it. At a fair price, both are worth the same. |

**At a 4% going rate:**

| Payment | When | Calculation | Worth today |
| --- | --- | --- | --- |
| $40 | 1 year | $40 ÷ 1.04 | $38.46 |
| $40 | 2 years | $40 ÷ 1.04² | $36.98 |
| $1,040 | 3 years | $1,040 ÷ 1.04³ | $924.56 |
| **Total** | | | **$1,000.00** |

It's worth exactly $1,000, which makes sense: it pays 4%, and 4% is the going rate.

**Now rates rise and new bonds pay 6%.** The payments stay the same, since they're in the contract. Only the discount rate changes:

| Payment | When | Calculation | Worth today |
| --- | --- | --- | --- |
| $40 | 1 year | $40 ÷ 1.06 | $37.74 |
| $40 | 2 years | $40 ÷ 1.06² | $35.60 |
| $1,040 | 3 years | $1,040 ÷ 1.06³ | $873.20 |
| **Total** | | | **$946.54** |

**And if rates fall to 2%,** the same bond is worth $1,057.69.

So the bond's fair price is $1,000 at 4%, $946.54 at 6% and $1,057.69 at 2%. The rate goes in, the price comes out. When rates rise, a bond's price falls; when rates fall, it rises.

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

**Yield runs the calculation backward.** Instead of starting from the rate and finding the price, start from the price and find the rate:

| You pay | You receive | Your yield |
| --- | --- | --- |
| $1,000 | $40, $40, $1,040 | 4% |
| $946.54 | $40, $40, $1,040 | 6% |

Same payments. Pay less and you earn more. That's why **bond prices and yields always move in opposite directions**: they're two ways of describing the same thing. The coupon rate and the yield are equal only when the bond trades at exactly $1,000.

So when the news says "the 10-year Treasury yield rose," it means prices of 10-year US government bonds fell, and the going rate for lending to the government for 10 years went up. Since that's the safe layer underneath nearly every discount rate, everything else in the economy is now discounted a little more steeply.

---

## A Business

Valuing a business takes a few more terms:

- **Profit:** what a business earns after paying all its costs. For valuing a business, it's the stream of money the owner receives.
- **Perpetuity:** a stream of equal payments that goes on forever. Its value is the yearly amount ÷ the rate.
- **Growth rate:** how fast the yearly amount is expected to rise.
- **Growing perpetuity:** a stream that goes on forever and grows each year. Its value is next year's amount ÷ (rate − growth rate).

Sam's center earns $600 a month in profit, so $7,200 a year. A buyer wants to purchase the whole business. What's a fair price?

| Step | For Sam's center |
| --- | --- |
| 1. Forecast | Profit of $7,200 a year, assumed to continue indefinitely. Unlike the bond, this is a guess. |
| 2. Timeline | $7,200 at the end of every year, forever |
| 3. Rate | 8%: a safe rate plus extra, because a small business is risky |
| 4. Discount and add | The perpetuity shortcut below |
| 5. Best use | Keep running it, or shut it and sell the desks and books for $3,000 |

Adding up an endless stream one year at a time would take forever, so use the perpetuity shortcut:

> Value = Yearly amount ÷ Rate = $7,200 ÷ 0.08 = **$90,000**

A way to check it: $90,000 in an account paying 8% pays $7,200 a year forever without ever touching the $90,000. Owning the center and owning $90,000 at 8% give the same stream of money, so they're worth the same.

Step 5: running it is worth $90,000, selling it off for parts is worth $3,000. Running it wins, so the center is worth $90,000. What Sam paid for the desks doesn't enter into it.

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

**Now add growth.** If the buyer expects profits to rise each year, every later payment is bigger, and the stream is worth more. Use the growing perpetuity:

> Value = Next year's profit ÷ (Rate − Growth rate)

Discounting shrinks future money; growth enlarges it. The formula nets the two. With an 8% rate and $7,200 next year:

| Expected profit growth per year | Calculation | Value today |
| --- | --- | --- |
| 0% | $7,200 ÷ 0.08 | $90,000 |
| 3% | $7,200 ÷ 0.05 | $144,000 |
| 5% | $7,200 ÷ 0.03 | $240,000 |
| 7% | $7,200 ÷ 0.01 | $720,000 |

Same business, same profit today. Only the expectation about growth changed, and the value went from $90,000 to $720,000.

Two lessons come out of this table. First, **expectations about growth can matter more than current profit.** That's why some companies with small profits today are worth enormous amounts. Second, **values are extremely sensitive when growth gets close to the rate.** Small changes in what people believe about the future cause big changes in price, which is a large part of why markets are jumpy and why bubbles happen.

(The formula only works when growth is below the rate. If something grew faster than the rate forever, it would be worth infinite money, which is a sign that no growth lasts forever.)

And since a price rests on people's guesses about future profits, which can be optimistic, scared or wrong, market prices swing far more than the businesses underneath them.

---

## Land and Skills

Land and skills are streams of money too, just of different kinds:

- **Rent:** what someone pays to use land or a building for a period of time. It's land's stream of money.
- **Human capital:** skills and knowledge that raise what a person can earn (from Part 1). Its stream of money is the extra pay it brings.

**Sam's lot.** Sam owns the small lot her center sits on.

| Step | For Sam's lot |
| --- | --- |
| 1. Forecast | Rent of $1,000 a year if she leased it out. If she uses it herself, that's the rent she doesn't have to pay. |
| 2. Timeline | $1,000 every year, forever, since land doesn't wear out |
| 3. Rate | 5%: steadier than a small business, riskier than a government bond |
| 4. Discount and add | Perpetuity: $1,000 ÷ 0.05 |
| 5. Best use | Rent it out, use it for the center, or sell it. It's worth whichever is highest. |

So the lot is worth $1,000 ÷ 0.05 = **$20,000**.

Then the subway station from Part 1 opens nearby. The spot can now earn $2,000 a year in rent: $2,000 ÷ 0.05 = **$40,000**. Nothing about the land changed. The future rents doubled, and the price jumped the moment people expected it, before a single extra dollar of rent was paid.

Now change only the rate. Rents stay at $1,000, but rates fall to 4%: $1,000 ÷ 0.04 = **$25,000**. The land got 25% more valuable with no subway and no new building. That's why housing booms tend to follow low interest rates.

And if rents are expected to grow 2% a year, the growing perpetuity gives $1,000 ÷ (0.05 − 0.02) = **$33,333**.

**Leo's course.** Leo, one of Sam's tutors, is deciding whether to take a $5,000 course that would raise his pay by $200 a month.

| Step | For Leo's course |
| --- | --- |
| 1. Forecast | $2,400 a year of extra pay, for the 20 years he plans to keep teaching |
| 2. Timeline | $2,400 at the end of each year, years 1 to 20 |
| 3. Rate | 5% |
| 4. Discount and add | Discount each of the 20 payments and add them up |
| 5. Best use | Take the course, or keep the $5,000. Take it if the skill is worth more than it costs. |

Discounting each of the 20 payments at 5% and adding them up gives **$29,909**, if the skill stays in demand. Here's how that moves when the forecast changes:

| Scenario | Extra pay | How long | Worth today |
| --- | --- | --- | --- |
| The skill stays in demand | $2,400 a year | 20 years | $29,909 |
| AI makes it common after 5 years | $2,400 a year | 5 years | $10,391 |
| AI also halves the raise | $1,200 a year | 5 years | $5,195 |

In the first case, the course is a great deal: pay $5,000, get $29,909 of value. In the last, it barely breaks even.

That's the human capital point from Part 1, now with numbers. A skill is worth the extra income it brings, discounted to today. AI doesn't have to destroy a skill to hurt it. It only has to shorten how long the skill pays, or shrink how much it pays.

---

## A Stock

Stocks add some vocabulary of their own:

- **Share:** one slice of ownership in a company. It entitles you to a slice of the company's future profits.
- **Dividend:** profit the company pays out to shareholders. Profit it doesn't pay out gets reinvested to grow the business.
- **Market cap:** share price × number of shares. The market's price for the whole company.
- **Earnings per share (EPS):** the company's yearly profit ÷ number of shares.
- **Equity risk premium:** the extra return investors demand for owning stocks instead of safe government bonds.
- **P/E ratio:** share price ÷ earnings per share. How many dollars investors pay for each dollar of yearly profit.

Brightpath Learning is a made-up chain of tutoring centers, like hundreds of Sam's. It's listed on the stock market.

- Profit next year: $50 million
- Shares: 10 million, so earnings per share are $5
- Expected profit growth: 3% a year
- Safe rate 4%, plus a 4% equity risk premium, so an 8% discount rate

| Step | For Brightpath |
| --- | --- |
| 1. Forecast | $50 million of profit next year, growing 3% a year |
| 2. Timeline | Profit in each future year: $50M, $51.5M, $53.0M, and so on |
| 3. Rate | 8%: 4% safe rate plus 4% equity risk premium |
| 4. Discount and add | Growing perpetuity |
| 5. Best use | Hold the shares for the profits, or sell them to someone who'll pay more |

**The whole company:** $50 million ÷ (0.08 − 0.03) = **$1 billion**.

**One share:** $1 billion ÷ 10 million shares = **$100**.

**Its P/E:** $100 ÷ $5 = **20**. Investors pay $20 for each $1 of yearly profit.

That P/E isn't a coincidence. Start with Price = Profit ÷ (Rate − Growth) and divide both sides by the profit:

> P/E = 1 ÷ (Rate − Growth) = 1 ÷ 0.05 = 20

So a P/E is the rate and growth assumptions in compressed form. You can run it backward too: a P/E of 25 means the market is pricing in a rate only 4 points above long-run profit growth. **A high P/E means the market expects strong growth, uses a low rate, or both.**

It's a simplification. It assumes profits keep growing steadily forever and that the market treats them as the owners' money, whether paid out or reinvested. Real P/Es are just prices divided by profits; the formula is a way to read them.

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

## A Startup

Startups need a different approach, and a few new terms:

- **Scenario:** one possible future, with a chance of happening.
- **Expected value:** the average outcome across scenarios, each weighted by its chance.
- **Funding round:** when a startup sells a slice of itself to investors for cash.
- **Valuation:** the price for the whole company implied by a funding round. If an investor pays $4 million for 20%, the valuation is $20 million.

A startup is building an AI tutor, a direct competitor to Sam. It has no profit and little revenue, so there's no steady stream to forecast. An investor pictures where it could be in 8 years:

| Outcome | Chance | Company worth then |
| --- | --- | --- |
| Becomes a major player | 5% | $2 billion |
| Decent business, gets acquired | 20% | $100 million |
| Fails | 75% | $0 |

| Step | For the startup |
| --- | --- |
| 1. Forecast | The three scenarios above |
| 2. Timeline | Collapse the scenarios into one amount on one date: the company's expected worth in 8 years, when investors plan to cash out |
| 3. Rate | 25%: far higher than for Sam, because the money is far away, locked up and very uncertain |
| 4. Discount and add | Weight each scenario by its chance, then discount |
| 5. Best use | Invest in this startup, or in a different one |

**Expected value in 8 years:** 5% × $2 billion + 20% × $100 million + 75% × $0 = **$120 million**.

**Worth today:** $120 million ÷ 1.25⁸ ≈ **$20 million**.

**The funding round:** the investor puts in $4 million for 20% of the company, which values the whole company at $20 million, in line with their estimate.

Three things stand out:

- **Most of the worth comes from the rare big win.** The 5% scenario supplies $100 million of the $120 million. So investors care most about how big a company could get, not its current profit.
- **Most startups fail, and that's priced in.** A venture fund expects to lose money on most bets and make it back on a few huge winners.
- **In practice, price comes from negotiation.** Investors compare with what similar startups raised at, weigh the team and the market, and compete with each other. When many investors want in, the price goes up regardless of anyone's spreadsheet, which is how hype pushes valuations up and why they can crash when sentiment turns.

---

## Why Everything Moves When Rates Change

Two terms help describe what happens next:

- **Repricing:** when the market changes what it will pay for something, even though nothing about the thing itself changed.
- **Interest rate sensitivity:** how much a price moves when rates move. The further away most of the money is, the more sensitive the price.

The Fed raises rates, and every discount rate in this post goes up by one point. Nothing else changes: same payments, same profits, same rents, same forecasts.

| | Rate before → after | Worth before | Worth after | Change |
| --- | --- | --- | --- | --- |
| The bond | 4% → 5% | $1,000 | $973 | −3% |
| Sam's center | 8% → 9% | $90,000 | $80,000 | −11% |
| Sam's lot | 5% → 6% | $20,000 | $16,667 | −17% |
| Leo's course | 5% → 6% | $29,909 | $27,528 | −8% |
| A Brightpath share | 8% → 9% | $100 | $83 | −17% |
| The AI tutor startup | 25% → 26% | $20 million | $18.9 million | −6% |

Everything fell at once, and nothing about any of them changed. That's what people mean when they say markets react to the Fed.

The size of the drop depends on how far away the money is:

- **The bond** barely moved, because its last payment is only 3 years away. A 30-year bond paying 4% would fall from $1,000 to about $725 if rates went from 4% to 6%.
- **Things that pay forever move much more,** because so much of their value sits far in the future. Low-rate ones move most of all: the lot fell 17% and the center 11%, because going from 5% to 6% is a bigger relative jump than going from 8% to 9%.
- **Fast-growing companies fall harder than slow ones.** A company growing 6% a year at an 8% rate has a P/E of 50. At 9%, it drops to 33, a 33% fall, twice Brightpath's. More of its value is far away, where a higher rate shrinks it most. That's why tech stocks swing more than utilities when the Fed moves.

It works in reverse too. When rates fall, all of these rise together, often with no change in the businesses underneath, which is why long stretches of low rates tend to bring booms in asset prices.

**A real example:** in 2022, the Fed raised rates very quickly to fight inflation. Bonds had one of their worst years in decades, stocks fell, fast-growing tech stocks fell the most, and startup funding dried up. For most of those companies, nothing about their products changed that year. The discount rate did.

{{< stuck "When the Fed \"raises rates\", is that a borrowing rate or a lending rate?" >}}
Both, because they're the same payment seen from two sides: a cost for the borrower, income for the lender. The Fed moves all of its rates up together: what it pays banks on reserves, what it charges banks to borrow, and so the rate banks charge each other.

What I had backward is that the Fed's rate isn't separate from the "safe rate" in these valuations. It *is* the safe rate, at the very bottom. Parking money at the Fed overnight is about the safest thing there is, so other safe options can't pay much less:

| Safe option | Why it moves with the Fed |
| --- | --- |
| Short-term government bonds | If banks can earn 5% at the Fed, nobody lends to the government for 3 months at 4% |
| Savings accounts and money market funds | They hold those bonds and deposits, so they pay more too |
| Longer government bonds | They follow what people expect the Fed's rate to be over the coming years |

So a Fed hike works through two channels:

| Channel | Which dial it moves | When |
| --- | --- | --- |
| Safe returns rise | The **rate**: future money is discounted more steeply | Right away, which is why markets move the afternoon of an announcement |
| Borrowing costs more, so people and companies spend less | The **forecast**: profits and rents may shrink | Over the following months |

Long-term rates don't always follow one for one. If the Fed raises rates but people expect cuts soon, 10-year yields may barely move.
{{< /stuck >}}

{{< stuck "Why do yields go up when the Fed tightens, inflation rises, or the economy booms?" >}}
What finally made it click: **nobody sets a bond's yield.** The bond's payments are fixed at $40, $40, $1,040. The only thing that moves is the price people will pay, and the yield is just what those fixed payments work out to at that price: 4% at $1,000, 6% at $946.54.

So the real question is why buyers would suddenly pay less for the exact same bond. A buyer always compares two things: what else could my money do, and what will these payments actually buy? Each case changes one of them.

**The Fed tightens: the alternative pays more.** A safe account used to pay 4%, the same as the bond, so buyers paid $1,000. The Fed raises rates and the safe account now pays 6%. Nobody pays $1,000 for 4% when 6% is available safely. Anyone selling the bond has to drop the price until it competes: $946.54, a 6% yield.

**Inflation rises: the payments will buy less.** With prices expected to rise 1% a year, $1,040 back on $1,000 lent buys about 3% more than before. If people start expecting 3% inflation, the same $1,040 buys only about 1% more. To keep a 3% gain in actual stuff, buyers now want about 6%, so again they'll only pay about $946.54.

**The economy booms: the money has better uses.** Stocks look likely to return 10%, and companies offer new bonds at 6% to fund expansion. Holders of the old 4% bond sell it to move their money, few want to buy it, and its price falls until it's attractive again, around a 6% yield.

| Case | What changed for the buyer | Result |
| --- | --- | --- |
| Fed tightens | Safe alternatives pay more | Pays less for the same bond |
| Inflation rises | The fixed payments will buy less | Pays less for the same bond |
| Boom | The money has better uses | Pays less for the same bond |

Same story every time: buyers pay less, so the yield goes up.
{{< /stuck >}}

{{< stuck "What does inflation have to do with interest rates?" >}}
Two things.

**Lenders build it into the rate.** What a lender really cares about is how much more *stuff* they can buy when they're paid back. The **nominal rate** is the rate in dollars, the one quoted. The **real rate** is roughly the nominal rate minus inflation:

| | Nominal rate | Expected inflation | Real rate |
| --- | --- | --- | --- |
| Before | 4% | 1% | about 3% |
| Inflation picks up | 4% | 3% | about 1% |
| What lenders now demand | 6% | 3% | about 3% |

So when people expect more inflation, yields rise even if the Fed does nothing.

**It's what the Fed reacts to.** The Fed aims to keep inflation around 2%. When it runs higher, the Fed raises rates: borrowing costs more, people and companies spend less, sellers can't raise prices as easily, and inflation slows. That's why rising inflation and Fed hikes usually arrive together.

Inflation hurts fixed payments most. A bond's $40 never changes, so it just buys less. A business or a landlord can often raise prices and rents along with inflation, which partly offsets the higher discount rate. That's why bonds tend to suffer most when inflation surprises upward.
{{< /stuck >}}

{{< stuck "So when yields go up, everything is worth less?" >}}
Only if nothing else improves at the same time. The yield on government bonds is the bottom layer of every discount rate here. Brightpath's 8% was 4% safe plus 4% for risk, so if the safe rate goes to 5%, its rate goes to 9%. What happens next depends on why yields rose:

| Why yields rose | Rate | Expected growth | Brightpath's P/E |
| --- | --- | --- | --- |
| Before | 8% | 3% | 1 ÷ 0.05 = 20 |
| Fed tightening or inflation | 9% | 3% | 1 ÷ 0.06 = 16.7 |
| A boom | 9% | 4% | 1 ÷ 0.05 = 20 |

When the Fed tightens or inflation rises, the rate goes up and the forecast doesn't improve, so the price falls. That was 2022. In a boom, the rate goes up but so do expected profits, and the two can cancel out.

And not everyone loses. Higher yields help anyone putting money to work now: savers earn more, and new bond buyers lock in better returns. Rising rates shift value from people who already own assets to people buying them fresh.
{{< /stuck >}}

---

## The Recipe, Side by Side

| | Forecast | Rate | Worth today |
| --- | --- | --- | --- |
| Bond | $40, $40, $1,040, fixed by contract | 4% | $1,000 |
| Sam's center | $7,200 a year, forever | 8% | $90,000 |
| Sam's lot | $1,000 a year of rent, forever | 5% | $20,000 |
| Leo's course | $2,400 a year for 20 years | 5% | $29,909 |
| A Brightpath share | $5 of profit next year, growing 3% a year | 8% | $100 |
| AI tutor startup | 5% chance of $2B, 20% of $100M, in 8 years | 25% | About $20M |

Moving down the table, the forecast becomes less certain and the rate goes up to match.

---

## What's Next

This part used one recipe for everything: list the money something will bring, discount it to today, and add it up. Bonds, a business, land, a skill, a stock and a startup differ only in their stream of money. Three dials drive the answer: what it pays, how fast that grows, and the discount rate. And because the Fed anchors every discount rate, a change in rates reprices all of them at once.

[Part 4](/posts/economics-markets/) is about markets: how buyers and sellers actually arrive at a price through supply and demand, what stock, bond, commodity and currency markets do, and what's really happening when people say "the market is up."
