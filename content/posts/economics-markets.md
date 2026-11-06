---
title: "How Markets Set a Price"
tags: ["Economics", "First Principles", "Markets", "Stocks", "Bonds", "Commodities", "Currencies"]
date: 2026-11-06
draft: false
series: "Economics from Scratch"
series_order: 4
summary: "How buyers and sellers arrive at a price nobody chose, what makes prices move, and how the same idea runs the stock, bond, commodity and currency markets. Then one oil shock traced through all of them at once."
---

[Part 3](/posts/economics-what-anything-is-worth/) worked out what things are worth: list the money something will bring in the future, discount each amount back to today, and add them up. But what something is worth and what it sells for aren't the same. This part is about the second one: how buyers and sellers actually arrive at a price.

I expected markets to be the complicated part. The basic mechanism turned out to be simple, and the same mechanism runs tutoring, stocks, oil and currencies. What's hard is how the markets push on each other, which is where this part ends.

As before, I've kept the questions I had along the way and what cleared them up.

---

## How a Price Gets Set

- **Market:** anywhere buyers and sellers of the same thing meet and trade. It can be a building, a website, or just a town where everyone knows the going rate.
- **Demand:** how much buyers want to buy at each possible price.
- **Supply:** how much sellers are willing to sell at each possible price.
- **Equilibrium price:** the price where the amount buyers want equals the amount sellers offer.

Take the market for tutoring in Sam's town. Families are the buyers. Sam's center and the other tutors in town are the sellers.

**Demand: how many students want tutoring at each monthly price**

| Price per month | Students wanting tutoring |
| --- | --- |
| $50 | 200 |
| $75 | 160 |
| $100 | 120 |
| $125 | 80 |
| $150 | 50 |

As the price goes up, fewer families want it. Every family values tutoring differently: the most each one would pay, its **willingness to pay**, is different. At $50, almost any family that cares about grades signs up. At $150, only the ones who value it a lot still do.

**Supply: how many tutoring spots get offered at each price**

| Price per month | Spots offered |
| --- | --- |
| $50 | 40 |
| $75 | 80 |
| $100 | 120 |
| $125 | 160 |
| $150 | 200 |

As the price goes up, more spots appear. That's opportunity cost, the value of the best thing you give up. At $50, teaching barely beats Leo's other options, so few tutors bother. At $150, teaching beats a lot of other work, so tutors take on more students and new centers open.

**Putting them together**

| Price | Students wanting | Spots offered | What happens |
| --- | --- | --- | --- |
| $75 | 160 | 80 | 80 families can't get a spot. Waitlists form, and centers realize they can charge more. |
| **$100** | **120** | **120** | **Every family who wants a spot at this price gets one. Every spot is filled.** |
| $125 | 80 | 160 | 80 spots sit empty. Centers cut prices to fill them. |

Above $100, prices drift down. Below $100, they drift up. The only price that stays put is **$100**, the equilibrium. That's why Sam charges $100. She didn't pick it freely; it's where the market settles. At $125, families would go to cheaper tutors. At $75, she'd have a waitlist and be leaving money on the table.

**Nobody set $100.** No one in town calculated it. It came out of thousands of separate decisions by families and tutors, each doing what made sense for them. That's what people mean when they say a market "discovers" a price.

It also ties the price back to value. Every family paying $100 values tutoring at $100 or more. The gap between what a family would have paid and the $100 it actually pays is its **consumer surplus**, the value it gets for free.

---

## What Makes Prices Move

- **Shift in demand:** buyers want more, or less, *at every price*, because something other than the price changed: more reasons to want tutoring, more families in town, or a cheaper substitute appearing.
- **Shift in supply:** sellers offer more, or less, *at every price*, because their costs or options changed: rent goes up, more tutors move to town, or better tools let each tutor teach more.
- **Shortage:** buyers want more than sellers offer at the current price. Waitlists form and prices rise.
- **Surplus:** sellers offer more than buyers want at the current price. Spots sit empty and prices fall.

A change in price doesn't shift demand. If tutoring gets pricier, fewer families buy, but that's moving along the same demand table. A shift means the whole table changes.

Each example starts from the equilibrium above: $100 a month, 120 students.

**Demand rises.** College admissions get more competitive, and every family wants more help. At every price, 40 more students want tutoring:

| Price | Students wanting (before) | Students wanting (now) | Spots offered |
| --- | --- | --- | --- |
| $75 | 160 | 200 | 80 |
| $100 | 120 | **160** | **120** |
| $125 | 80 | **120** | **160** |

At $100, 160 students now want spots but only 120 exist: a shortage. Centers raise prices. At $125 there are empty spots, so prices don't go that high. They settle where the two meet, about **$112.50, with 140 students**.

The higher price does two jobs at once. It hands the scarce spots to the families who value them most, and it pulls in more supply, as tutors take on more students and new centers open. Nobody coordinates any of that. The price does it.

**Supply falls.** Rents in town double, so some centers close. At every price, 40 fewer spots are offered:

| Price | Students wanting | Spots offered (before) | Spots offered (now) |
| --- | --- | --- | --- |
| $100 | **120** | 120 | **80** |
| $125 | **80** | 160 | **120** |

At $100 there's now a shortage of 40 spots. Prices rise until the two meet, at about **$112.50, with 100 students**. It's the same price rise as before, for the opposite reason, and this time *fewer* students get tutored.

{{< stuck "How can a price rise while fewer things get sold?" >}}
Because the limit is on the sellers' side: there's less to sell. Walking through it slowly helped.

**Before:** 120 spots, 120 students, $100 each. **Rents double and some centers close.** Now there are only 80 spots at $100, but 120 families still want tutoring at that price. That's 40 more families than spots. Then:

1. Centers get more requests than they can take, so they raise prices.
2. As the price climbs, some families drop out: the ones who valued tutoring at $105 decide it isn't worth $112.
3. The higher price makes it just worth it for a few tutors to take on more students, so a few spots come back.
4. At about $112.50, the two meet: 100 families still want spots, and 100 spots exist.

| | Before | After |
| --- | --- | --- |
| Price | $100 | $112.50 |
| Students tutored | 120 | 100 |

Fewer students get tutored **because there are fewer spots**, and no price can change that. The price rises to decide **who gets the scarce spots**: the families who value tutoring most keep them, and the 20 who valued it least drop out.

When demand rose instead, the higher price pulled in *more* spots, so more students got tutored. Same price rise, opposite cause, opposite effect on how much gets sold. Real versions of "price up, sales down":

- **Oil producers cut output:** gas prices rise and people buy less.
- **A drought destroys crops:** food prices rise and less food gets sold.
- **A city won't allow new housing:** rents rise while the number of homes stays flat, so the extra demand shows up only as higher prices.
{{< /stuck >}}

**An AI tutor arrives.** A cheap AI tutoring app launches. For some families it's good enough, so they stop paying for a human. At every price, 60 fewer students want human tutoring:

| Price | Students wanting (before) | Students wanting (now) | Spots offered |
| --- | --- | --- | --- |
| $75 | 160 | **100** | **80** |
| $100 | 120 | **60** | **120** |

At $100, 60 spots now sit empty: a surplus. Centers cut prices to fill them, and they settle around **$81, with 90 students**.

Families who switched to the app pay less. Families who stuck with human tutors pay less too. But Sam earns less per student and has fewer of them, and Leo's teaching skill is worth less. As prices fall, some tutors leave for other work, which is the market shrinking supply on its own.

**The four directions**

| What happened | Price | How many trade |
| --- | --- | --- |
| Demand rises | Up | Up |
| Demand falls | Down | Down |
| Supply rises | Down | Up |
| Supply falls | Up | Down |

So when a price moves, the first question is whether buyers wanted more or sellers offered less. Both raise the price, but they mean very different things. A rising price with rising sales is a booming market. A rising price with falling sales is a squeeze.

---

## How Financial Markets Trade Minute by Minute

The tutoring market settles slowly, over months. Financial markets do the same thing in fractions of a second.

- **Exchange:** the marketplace where shares are traded, like the New York Stock Exchange or Nasdaq. Today it's computers matching orders.
- **Limit order:** an instruction like "buy 500 shares, but only at $99.90 or less."
- **Market order:** an instruction like "buy 500 shares now, at the best price available."
- **Order book:** the list of all waiting limit orders, buyers on one side and sellers on the other.
- **Bid and ask:** the bid is the highest price any buyer is offering right now. The ask is the lowest price any seller will accept.
- **Spread:** the gap between the bid and the ask.
- **Liquidity:** how easily you can buy or sell without moving the price much.

Brightpath Learning is a made-up chain of tutoring centers, like hundreds of Sam's, listed on the stock market. At 10:00 a.m., here's what's waiting in its order book:

| Buyers (bids) | Shares | | Sellers (asks) | Shares |
| --- | --- | --- | --- | --- |
| $99.90 | 500 | | $100.10 | 400 |
| $99.80 | 1,000 | | $100.20 | 800 |
| $99.70 | 2,000 | | $100.30 | 1,500 |

The best bid is $99.90 and the best ask is $100.10, so the spread is 20 cents. Nobody trades yet, because no buyer will pay what any seller wants. When people say "the stock is at $100," they mean the price of the most recent trade, which sits somewhere in this range.

**A trade.** Someone sends a market order to **buy 600 shares**. The exchange fills it from the cheapest sellers up:

1. 400 shares at $100.10, the best ask, all of it.
2. The remaining 200 shares at $100.20, the next ask.

The last trade happened at $100.20, so the stock now shows as **$100.20**. The price rose 10 cents because a buyer wanted more shares than were offered at the lowest price. That's supply and demand, one order at a time. A large sell order does the reverse: it works down through the bids, and the price falls.

**News.** At 10:05, Brightpath announces new contracts that will lift its expected profit growth from 3% to 4% a year. Its profit next year is $50 million, and investors discount its future profits at 8% a year. For a stream of profits that grows at a steady rate forever, the value works out to next year's profit divided by the gap between the rate and the growth, which is the **growing perpetuity** formula from Part 3:

> $50 million ÷ (0.08 − 0.04) = $1.25 billion, or **$125 a share** across its 10 million shares, up from $100

Within seconds, sellers cancel their asks near $100 and repost them higher, since nobody wants to sell at $100 something now worth around $125. Buyers raise their bids. Trades happen at $105, $112, $118, and the price settles near where most traders' new estimates land. Nobody announces a new price. It comes out of thousands of traders updating their orders. That's how a market turns valuations into a price.

**Liquidity and market makers.** Brightpath's order book is deep: lots of shares waiting close to the current price, so buying 600 shares moved the price only 10 cents. Selling Sam's center, or a house, is the opposite. There might be one or two interested buyers, the gap between their offer and the asking price can be thousands of dollars, and it takes months. That's low liquidity, and it's one reason hard-to-sell things are discounted at higher rates: it's harder to get out.

Much of the liquidity in big stocks comes from **market makers**, firms that constantly post both bids and asks. They buy at $99.90, sell at $100.10, and earn the spread many thousands of times a day. That keeps the spread narrow for everyone else.

The orders come from individuals trading through apps, index funds and pension funds investing retirement savings, hedge funds betting on mispriced stocks, and high-speed trading firms. They all have different forecasts and rates, which is exactly why they trade: one thinks $100 is cheap, another thinks it's expensive.

---

## The Stock Market

- **Primary market:** a company selling new shares and getting the money. The first time it does this publicly is its **IPO**, initial public offering.
- **Secondary market:** investors trading shares with each other afterward. The company gets nothing from these trades.
- **Index:** a single number that tracks a group of stocks, so you can see how they're doing together.
- **Market-cap weighted:** bigger companies count for more in the index, in proportion to their total market value, their **market cap**.
- **Index fund:** a fund that buys every stock in an index, in the same proportions.
- **Bull market and bear market:** prices up 20% or more from a low, or down 20% or more from a high. A drop of 10% is a **correction**.

| Index | What it tracks | How it's weighted |
| --- | --- | --- |
| S&P 500 | 500 large US companies | By market cap |
| Nasdaq Composite | Everything listed on the Nasdaq exchange, heavy in tech | By market cap |
| Dow Jones Industrial Average | 30 large, well-known companies | By share price, an old quirk |

When the news says "the market is up 1% today," it almost always means the S&P 500 rose 1%.

**A tiny index.** Say the whole market were three companies:

| Company | Market cap | Share of the index |
| --- | --- | --- |
| A big tech company | $8 billion | 80% |
| Brightpath | $1 billion | 10% |
| A bank | $1 billion | 10% |
| **Total** | **$10 billion** | **100%** |

One day, Brightpath jumps 10%, the tech company rises 2%, and the bank falls 1%:

| Company | Change | Dollars gained or lost |
| --- | --- | --- |
| Big tech | +2% | +$160 million |
| Brightpath | +10% | +$100 million |
| Bank | −1% | −$10 million |
| **Index** | | **+$250 million, or +2.5%** |

Brightpath had by far the best day, but the tech company moved the index more, because it's eight times bigger. In recent years a handful of the largest tech companies, many of them tied to AI, have made up a big share of the S&P 500. So "the market is up" can mostly mean "a few giant companies are up" while the typical company is flat.

**Points versus percent.** "The Dow rose 400 points" means nothing on its own. 400 points on an index at 40,000 is 1%. On an index at 4,000 it would be 10%. Always look at the percentage.

**Why the whole market moves together.** Every stock's price comes from the same three dials: how much the company will pay its owners, how fast that grows, and the rate those future payments are discounted at. Some of those dials are shared by every company:

| Shared dial | What moves it | Effect on the whole market |
| --- | --- | --- |
| The safe rate | The Fed, inflation, government bond yields | Every company's discount rate rises or falls together |
| Expected growth | A strong or weak economy, recession fears | Every company's forecast shifts together |
| The equity risk premium | How nervous investors are | Scared investors demand more extra return from all stocks |

When the whole market moves, it's usually one of those shared dials. When one stock moves on its own, it's usually news about that company's own forecast, like Brightpath's new contracts.

**Index funds.** Most people's retirement savings sit in index funds. Instead of guessing which companies will do best, they buy the whole index. It's very hard to pick winners better than the market as a whole, consistently and after costs, so owning everything cheaply is a strong default. It also means that as money flows into index funds, the biggest companies get the biggest share of it, just because of weighting.

{{< stuck "So the skill investing needs is forecasting growth and adjusting for risk?" >}}
Mostly, with one twist I hadn't thought about. Investing does come down to two skills: forecasting what something will pay and how fast that grows, and pricing risk by choosing the discount rate. But the market price already includes everyone else's forecast. Buying Brightpath at $100 when you think it's worth $110 only pays off if you're right *and* the crowd is wrong. So the real skill is forecasting **better than the consensus**, and the first step is reading what the price already assumes.

It's humbling too: most professional fund managers fail to beat a plain index fund over long periods. That's why index funds are the default, and why the real edge usually comes from knowing one area far better than the market does.
{{< /stuck >}}

{{< stuck "The price and the profit are today's numbers. Are growth and the rate just forecasts, so the price is the only thing that moves?" >}}
They are, and that's the key. A company's **P/E ratio** is its share price divided by its earnings per share, where earnings is another word for profit. It answers: how many dollars are investors paying for each $1 of yearly profit? Brightpath's is $100 ÷ $5 = 20. For a company whose profits grow steadily forever, it works out to:

> P/E = 1 ÷ (Rate − Growth)

The price and earnings are things you can see: the price is on the screen, and the company reports its profit. The growth rate and the discount rate live in investors' heads. The company earned what it earned, so when beliefs about the future change, **the price is the knob that moves**:

| What investors believe | P/E | Price for the same $5 of earnings |
| --- | --- | --- |
| 8% rate, 3% growth | 20 | $100 |
| 8% rate, 4% growth | 25 | $125 |
| 8% rate, 6% growth | 50 | $250 |
| 9% rate, 3% growth | 16.7 | $83 |

Same profit today, very different prices, all from different beliefs about the future.

You can run it backward. A P/E of 50 means Rate − Growth = 1 ÷ 50 = 2%. At an 8% rate, the market must expect about **6%** growth a year, forever. So instead of asking "is 50 a high P/E?", ask "does 6% growth forever sound realistic for this company?" That turns a number into a question about the business.

From the price alone you can only see the *gap* between rate and growth. A P/E of 20 could mean 8% and 3%, or 10% and 5%. To split them, people estimate the rate from things they can see, the safe rate from government bond yields plus a risk premium from how stocks have behaved historically, and whatever's left is the growth the market expects. The price is the market's forecast compressed into one number. Every trade is someone saying that forecast is too high or too low.

And "earnings" is itself a forecast. Today's profit is a starting point for what the company will reliably earn, not the answer. It can be temporarily high after a one-off contract, temporarily low in a crisis, and not all of it can be paid out to owners if some has to go to replacing equipment just to stay open.
{{< /stuck >}}

---

## The Bond Market

- **Treasuries:** bonds issued by the US government. Short ones, up to a year, are **bills**; 2 to 10 years are **notes**; 20 to 30 years are **bonds**. People often call them all bonds.
- **Corporate bonds:** bonds issued by companies.
- **Credit rating:** a grade from agencies like S&P or Moody's for how likely a borrower is to repay. AAA is the safest. BBB and above is **investment grade**. Below that is **high yield**, also called junk.
- **Credit spread:** how much more a riskier borrower pays than the US government for the same length of time.
- **Yield curve:** the yields on Treasuries of different lengths, lined up from shortest to longest.
- **Inverted yield curve:** short-term yields higher than long-term ones.

**The yield curve.** A typical curve might look like this:

| Length | Yield |
| --- | --- |
| 3 months | 3.9% |
| 2 years | 3.7% |
| 10 years | 4.2% |
| 30 years | 4.7% |

Each point answers the same question: what does it cost the US government to borrow for this long? The shape says two things.

**Longer usually pays more.** Lending for 30 years ties your money up for a long time, and long bonds lose much more value when rates rise. In Part 3, a rise in rates from 4% to 6% knocked a 30-year bond down to about $725 per $1,000, while a 3-year bond barely moved. Lenders want extra for that risk, the **term premium**, so the curve normally slopes upward.

**The shape shows what people expect the Fed to do.** A 2-year yield is roughly the average Fed rate people expect over the next two years. Here the 3-month yield is 3.9% and the 2-year is 3.7%, so traders expect the Fed to cut a little over the next couple of years.

**When the curve inverts.** Say the 3-month pays 5% and the 10-year pays 4%. Traders expect rates to fall, usually because they think the economy will weaken and the Fed will have to cut. An inverted curve has come before most US recessions, which is why it gets so much attention. It isn't a perfect signal: the curve inverted in 2022 and stayed that way for a long time without a recession following right away.

{{< stuck "What's the \"curve\" in a yield curve?" >}}
It's literally a line on a chart. On any day, the US government has bonds of many lengths, each with its own yield. Put the length of the loan along the bottom and the yield up the side, plot each bond as a dot, and connect the dots.

| Length | Normal curve | Inverted curve |
| --- | --- | --- |
| 3 months | 3.6% | 5.2% |
| 2 years | 3.8% | 4.8% |
| 5 years | 4.0% | 4.4% |
| 10 years | 4.3% | 4.2% |
| 30 years | 4.7% | 4.3% |

In the normal curve, the line slopes up: the longer you lend, the more you earn. In the inverted one, it slopes down, because people expect the Fed to cut rates later. "The yield curve inverted" just means the line flipped from sloping up to sloping down. People watch the shape rather than any single yield, because the shape shows what the market expects rates, and the economy, to do over the coming years.
{{< /stuck >}}

**Credit spreads.** Say Brightpath borrows by selling 5-year bonds. Investors compare it with the government:

| Borrower | 5-year yield | Spread over Treasuries |
| --- | --- | --- |
| US government | 4.0% | 0 |
| Brightpath (rated BBB) | 5.5% | 1.5 points |
| A struggling company (rated B) | 9.0% | 5.0 points |

An interest rate is built from layers: what money can earn safely, plus extra for the chance of not being repaid. The spread is that extra for risk, with a market price on it.

Spreads move together, which makes them a good gauge of fear. When investors get nervous, they demand more from every risky borrower, spreads widen, and companies find borrowing harder right when they may need it most. When spreads are narrow, investors are calm, sometimes too calm.

The stock market gets the headlines, but the bond market sets the price of borrowing for everyone: the government, companies, and through mortgage rates, homeowners. The 10-year Treasury yield is the safe rate underneath almost every valuation. When people say "the bond market is telling us something," they usually mean the curve's shape or the spreads are hinting at where the economy is headed.

---

## Commodities and Futures

- **Commodity:** a raw good where one unit is as good as any other: oil, wheat, copper, gold, natural gas.
- **Spot price:** the price to buy it now, for immediate delivery.
- **Futures contract:** an agreement made today to buy or sell a fixed amount on a set future date, at a price agreed today.
- **Hedging:** using a contract like this to remove a risk you don't want.
- **Speculating:** taking on that risk on purpose, hoping to profit from the price moving.

It's spring. A farmer is planting wheat she'll harvest in September. A bakery will need that wheat in September. Wheat's spot price today is $6 a bushel. Both are nervous, in opposite directions: the farmer worries the price will **fall** by harvest, and the bakery worries it will **rise**.

So they sign a futures contract: the farmer delivers 10,000 bushels in September, and the bakery pays **$6.20 a bushel**, whatever the spot price is then.

| September spot price | Farmer gets | Bakery pays | Who came out ahead |
| --- | --- | --- | --- |
| $5.00 | $6.20 | $6.20 | Farmer: she'd have gotten only $5 otherwise |
| $6.20 | $6.20 | $6.20 | Neither |
| $8.00 | $6.20 | $6.20 | Bakery: it would have paid $8 otherwise |

Whichever way prices go, one side ends up wishing it hadn't signed. That's not the point. Both got **certainty**: the farmer knows her income and the bakery knows its costs, months ahead. They gave up the chance of a lucky price to get rid of the risk of an unlucky one.

The contract says $6.20 rather than $6 because buying wheat now and holding it until September costs money: storage, insurance, and the interest the money could have earned meanwhile. So the price for later delivery usually sits a bit above the spot price. In a shortage the reverse can happen, and wheat today costs more than wheat later.

**Speculators.** Most futures are traded by people who never want to touch a bushel. A speculator who thinks wheat will hit $8 buys September contracts at $6.20 and sells them before delivery. If wheat rises, the contracts are worth more and they profit. If it falls, they lose. They get a bad reputation, but they're the ones taking the other side when a farmer wants to hedge and no bakery is around. They're paid for carrying the risk nobody else wanted.

**Why a commodity can't be valued like a stock.** Valuing a stock, a bond or land means forecasting the money it will pay you and discounting it to today. A barrel of oil in storage pays nothing: no profit, no interest, no rent. With no stream of money, there's nothing to discount. Its price is whatever buyers will pay, set by supply and demand:

- **Oil** moves with how much the world is using and how much is being pumped. A war near oil fields or a production cut is a supply drop: price up, less sold.
- **Copper** goes into buildings, cars and power lines, so its price tends to rise when the world economy grows. Traders call it a gauge of economic health.
- **Gold** is mostly held, not used. People buy it when they're worried about inflation or crises, so its price often rises when they're scared.

An oil field is different, because it produces oil every year. Say it pumps 100,000 barrels a year for 10 years, sold at about $70 a barrel with $30 a barrel in costs. That's $4 million of profit a year. Discounting each year's $4 million at 10%, since oil prices swing a lot, and adding them up gives about **$24.6 million**. So the field can be valued, but its value still depends on the oil price, which is why oil companies' stocks move when oil does.

{{< stuck "So a commodity isn't valuable, but the thing producing it is?" >}}
I had it slightly wrong: the commodity *is* valuable. A barrel of oil is worth about $70 because people need it to drive, heat homes and make plastic. What differs is where the value comes from:

- **A commodity is valuable because you use it up.** You burn the oil, eat the wheat. Its price is set by how much people need it versus how much is available.
- **The thing producing it is valuable because it keeps producing.** The oil field gives you barrels year after year, so its value is that whole future stream, discounted and added up.

It's the difference between a **stock** of wealth, the field, and the **flow** that comes out of it each year, the barrels. They're linked: if oil drops from $70 to $40, the field is worth less, even though it pumps the same amount.

Gold is the odd one out. It's barely used up; most gold ever mined still exists. Its price comes almost entirely from how much people want to *keep* it.
{{< /stuck >}}

{{< stuck "Is oil as valuable as the things made with it?" >}}
It helped to split price from importance. In price, oil is worth less. Each step that turns oil into something useful adds value:

| Step | What it's worth | Value added |
| --- | --- | --- |
| A barrel of crude oil | about $70 | |
| Refined into gasoline, diesel, jet fuel | about $100 | $30, by the refinery |
| That fuel runs a truck delivering goods | the delivery is worth far more | the trucking company's work |

Wheat is worth less than bread, and copper less than the phones made with it.

In importance, often more. A price is set at the margin: it's what the *next* barrel is worth, not how much we'd suffer without oil entirely. It's the same reason water is cheap and diamonds are expensive. Oil is cheap per barrel because there's normally plenty, yet almost nothing runs without it.
{{< /stuck >}}

{{< stuck "Then why isn't oil's importance in its price?" >}}
What I'd missed is that it *is* in the price, just hidden until supply gets tight. People can't easily do without oil, so they barely cut back when the price rises:

| Price per barrel | Oil people still want to buy |
| --- | --- |
| $70 | 100 units |
| $100 | 98 units |
| $150 | 95 units |

If supply drops just 5%, from 100 to 95 units, the price has to rise until only 95 units are wanted: **$150**, more than double. A small shortage causes a huge jump. For something people can easily skip, like movie tickets, a 5% shortage would barely move the price, because people would just go less often.

How much the amount people buy changes when the price changes is called **elasticity**. Oil has very low elasticity in the short run, and that's where its importance lives: dormant while supply is ample, sudden in a shortage. While oil is plentiful, most of its value goes to the people using it, as consumer surplus, because competition keeps the price near the cost of pumping the next barrel.

What markets do underprice is the risk of a sudden cutoff, like a war closing a shipping route. That falls on the whole country, not just whoever is buying oil today, so nobody pays enough to insure against it. That's why governments keep strategic petroleum reserves.

The same logic applies to anything that becomes abundant. Something can be essential and cheap at once, just because there's plenty of it.
{{< /stuck >}}

Commodities are the inputs to almost everything. When oil rises, shipping, flying, farming and plastics all get more expensive, so prices across the economy rise. That's one of the most common sources of inflation. And data centers need huge amounts of electricity, copper and chips, so AI demand is now one of the forces moving some of these markets.

---

## Currencies

- **Exchange rate:** the price of one currency in another. "£1 = $1.25" means one British pound costs $1.25.
- **Foreign exchange (FX) market:** where currencies are traded, mostly by banks, companies and investors. It trades trillions of dollars a day, more than any other market.
- **Appreciate and depreciate:** a currency **appreciates** when it buys more of other currencies and **depreciates** when it buys less.

Sam orders £1,000 worth of books from a British publisher. The publisher wants pounds, so Sam's bank sells her dollars and buys pounds.

| Exchange rate | What the £1,000 of books costs Sam |
| --- | --- |
| £1 = $1.25 | $1,250 |
| £1 = $1.40 (dollar weaker) | $1,400 |
| £1 = $1.10 (dollar stronger) | $1,100 |

The books didn't change. Only the price of the pound did.

**What sets the rate.** A currency is priced like anything else: by supply and demand. People need foreign money to buy foreign things. Imagine all the swapping between two currencies happens at one giant booth. In reality it's banks trading with each other, but it works the same way. For dollars:

| Who needs dollars | Who sells dollars |
| --- | --- |
| Foreigners buying American goods and services | Americans buying foreign goods, like Sam's books |
| Foreign investors buying US stocks, bonds and property | Americans investing abroad |
| Anyone paying for things priced in dollars, like oil | Americans traveling abroad |

When demand for dollars rises faster than supply, the dollar strengthens. What tends to shift it:

1. **Interest rates.** If US rates rise, US bonds pay more than bonds elsewhere, so investors buy dollars to buy them. This is the biggest day-to-day force, and it's why the dollar often jumps when the Fed raises rates.
2. **Inflation.** If prices rise faster in the US than abroad, each dollar buys less stuff, and over time less of other currencies too.
3. **Growth.** If US companies look like the best place to invest, as during an AI boom, foreigners buy US stocks, which means buying dollars first.
4. **Fear.** In a crisis, investors worldwide rush into what feels safest, usually US government bonds. So the dollar often strengthens when the world is scared, even when the trouble started in the US.
5. **Trade.** If foreigners buy more American goods, they need more dollars.

**Who wins and who loses**

| | Strong dollar | Weak dollar |
| --- | --- | --- |
| Americans buying imports or traveling abroad | Win | Lose |
| American companies selling abroad | Lose: their products cost more elsewhere | Win |
| US inflation | Lower: imports are cheaper | Higher |
| Countries that borrowed in dollars | Lose: their debts grow in their own currency | Win |

That last row matters. Many countries and companies borrow in dollars. When the dollar strengthens, their debts grow in their own currency overnight, which is how a Fed decision in Washington can cause a crisis somewhere else.

**Floating, pegged and managed.** Most big currencies, like the dollar, euro, yen and pound, **float**: their price moves every day with supply and demand. Some countries instead **peg** their currency: the government promises to hold it at a fixed price against another currency, usually the dollar. Hong Kong has promised since 1983 that one US dollar will cost about 7.8 Hong Kong dollars.

To see how each works, take the rupee and round today's rate to ₹100 per dollar. On a normal day, Indians want $10 billion and foreigners offer $10 billion, so the price holds. Then oil prices jump, and Indian importers need $12 billion while foreigners still offer $10 billion.

| | Floating | Pegged | Managed float |
| --- | --- | --- | --- |
| Who sets the price | The market | The government, by promise | The market, with the central bank smoothing |
| When oil jumps | The dollar's price rises to around ₹105 | The central bank sells $2 billion of its **reserves**, its stockpile of foreign currency, and the price holds at ₹100 | The central bank sells some reserves so the rupee slides to ₹105 gradually |
| What absorbs the shock | The exchange rate | Reserves, then wages and prices | A mix |
| Risk | Day-to-day swings | Running out of reserves, then a sudden break | Some of both |
| Examples | US, Japan, UK | Hong Kong, Saudi Arabia | India, many others |

Under a float, the higher price fixes the gap by itself. At ₹105 a dollar, imports cost Indians more, so they buy a bit less from abroad, and Indian services cost foreigners less, so they buy more. Under a peg, the gap is there again tomorrow if oil stays high, and the reserves keep draining. Eventually the country has to let the price move, or make the shortage of dollars go away by raising interest rates to attract foreign money or squeezing imports.

{{< stuck "What's the advantage of pegging?" >}}
An example made it concrete. Priya runs a shirt factory in Thailand. A US retailer offers her 10,000 shirts at $5 each, $50,000, paid in six months. Her costs are in baht and come to 1,100,000 baht. With the baht pegged at 25 per dollar, she knows her profit:

| | Baht |
| --- | --- |
| Revenue: $50,000 × 25 | 1,250,000 |
| Costs | 1,100,000 |
| **Profit** | **150,000** |

If the baht floats, it could easily move 15% in six months:

| Rate in six months | Revenue in baht | Profit |
| --- | --- | --- |
| 29 per dollar (baht weakens) | 1,450,000 | 350,000 |
| 25 per dollar | 1,250,000 | 150,000 |
| 21 per dollar (baht strengthens) | 1,050,000 | **−50,000** |

Her margin is about 12%, but the currency can swing more than that, so every contract becomes partly a currency bet. Multiply her by every exporter in the country, and by every foreign company deciding where to build a factory, and a stable rate means more trade and investment.

A peg can also stop high inflation. In 1989, prices in Argentina rose about 3,000%. In 1991 it pegged the peso one to one to the dollar and allowed the central bank to issue a peso only if it held a dollar to back it. The government could no longer just print money, people believed that, and by 1994 inflation was about 4%.

And a peg makes foreign money cheaper to attract, because lenders stop worrying that the currency will fall before they're repaid.

Each advantage has a matching risk. When Thailand's peg broke in 1997, the baht fell from 25 to about 50 per dollar. The cheap foreign loans became a trap: Thai companies had borrowed in dollars, and their debts doubled in baht. And Argentina's peg left it stuck in a deep slump in 2001, unable to cut rates or let its currency fall, until it collapsed. A peg trades flexibility for stability.
{{< /stuck >}}

{{< stuck "No economy is the same as the US. Won't a pegged currency always drift away from the dollar?" >}}
They do drift a little. What I'd missed is that a peg doesn't need the economies to match. It needs the differences to get absorbed somewhere other than the exchange rate.

US states are the proof. Mississippi and Massachusetts are very different economies, yet one Mississippi dollar always equals one Massachusetts dollar. When Texas was hit by the oil bust in the 1980s, it couldn't devalue a "Texas dollar." Instead, workers moved to other states, federal taxes fell and unemployment insurance flowed in, and Texas wages and house prices fell until new businesses came. The economist Robert Mundell worked out in 1961 what a shared currency needs, in what's called the theory of **optimum currency areas**. For a pegging country, that means:

1. **Flexible prices and wages.** If the currency can't fall, local prices and wages must fall instead. That's called an **internal devaluation**. It works, but slowly and painfully.
2. **Inflation close to the anchor country's.**
3. **Big reserves**, so traders know a run will fail.
4. **Booms and slumps that line up with the anchor's**, so the same interest rate suits both.

Hong Kong's peg has lasted since 1983 because it holds more US dollars than all the Hong Kong dollars in existence and its prices bend: after 1997, its property values and prices fell for years rather than the currency. Saudi Arabia's has lasted because its main product, oil, is already priced in dollars.

Pegs break when nothing else bends. When the gap can't close any other way, it closes through the exchange rate, all at once.
{{< /stuck >}}

{{< stuck "If wages and prices end up adjusting anyway, why not just let currencies float?" >}}
Most big economies reached exactly that conclusion. Milton Friedman made the case in 1953 with daylight saving time. If everyone wants an extra hour of evening light in summer, you could ask every business, school and person to change their schedule, or you could just move the clocks. The exchange rate is the clock. A currency can fall 15% in a few weeks. Getting the same effect through wages and prices takes years of recession, as Greece found after 2010.

Some countries peg anyway because floating has costs of its own:

1. **Floating rates move on noise, not just reality.** The dollar rose about 50% against other major currencies from 1980 to 1985 and fell back nearly as far by 1987, without matching changes in the underlying economies.
2. **In a small, import-heavy economy, the exchange rate is the inflation rate.** Hong Kong imports almost everything. A 20% fall in its currency would push most prices up about 20%.
3. **Floating needs a trusted central bank.** Argentina had a floating currency in 1989, and 3,000% inflation.
4. **Debts in foreign currency.** If firms borrowed in dollars, a falling currency makes their debts bigger. The shock absorber turns into a crisis.
5. **Income already in dollars.** Saudi Arabia sells oil in dollars, so a dollar peg keeps its budget stable.

So big, diversified economies with trusted central banks float. Small, trade-heavy countries, oil exporters, and countries escaping high inflation often peg. Many sit in between, officially floating but quietly buying and selling to keep the rate from moving too much.
{{< /stuck >}}

{{< stuck "Why manage a currency's price at all? Doesn't the underlying economy decide it?" >}}
In the long run it does, and a central bank that fights it loses. What it can do is smooth the ride, because the currency often moves for reasons unrelated to the underlying economy.

In May 2013, the US Fed hinted it would slow its bond buying. US interest rates looked set to rise, so investors pulled money out of countries like India to chase higher US returns. The rupee fell from about ₹55 to about ₹68 per dollar by late August, around 20% in three months. Nothing about India's farms, factories or software firms changed 20% in three months. The money passing through changed.

A swing like that does real damage. The exchange rate is the price of everything foreign at once, so oil and electronics get 20% pricier, every company that borrowed in dollars sees its debt jump, and exporters can't price contracts. Panics also feed on themselves: as a currency falls, investors sell to avoid further losses, which pushes it down further. A central bank with large reserves can break that loop by standing ready to buy.

Central banks are in the price business anyway. They already set the price of money over time, the interest rate, and that rate moves the exchange rate directly. There's no hands-off option.

The limit is like a car's shock absorbers: they smooth the bumps but can't change where the road goes. Smoothing a temporary panic, like 2013, usually works. Fighting a real change, like higher inflation than the anchor country or a permanent trade gap, burns reserves and fails. The hard part is telling which one you're in while it's happening.
{{< /stuck >}}

{{< stuck "India is growing fast but the rupee keeps falling. Does that mean its growth is lower than it looks?" >}}
Not necessarily, once I saw what the growth number measures. India's reported growth is real GDP growth in rupees: how much more stuff it produces after removing inflation. Most of what Indians buy is made in India and priced in rupees, so the currency doesn't change that answer much.

The rupee falls mostly because Indian inflation runs higher than American inflation. If Indian prices rise 5% a year and American prices 3%, a rupee loses about 2% a year of buying power relative to a dollar. Over long periods, exchange rates tend to drift to offset inflation gaps, which economists call **purchasing power parity**.

Measured in dollars, though, growth looks slower. With round numbers:

| | Per year |
| --- | --- |
| Real growth | 6.5% |
| Plus Indian inflation | 5% |
| = Growth in rupees, before adjusting for inflation | 11.5% |
| Minus the rupee's fall against the dollar | 4.5% |
| = Growth in dollars | about 7% |
| Minus US inflation | 3% |
| = Growth in dollar buying power | **about 4%** |

The gap appears because in this example the rupee falls faster than the inflation difference, so each rupee buys less of the world's goods over time.

Which number matters depends on the question. Whether Indians are better off at home: real rupee growth. Whether India can afford oil, phones and foreign tuition: the dollar figure. How big India is compared with other countries: economists often use **PPP-adjusted** GDP, which values everything at local prices, and by that measure India's economy is around three times larger than at market exchange rates.
{{< /stuck >}}

---

## One Shock, Every Market

Each market so far was explained on its own. In reality they're all linked, so one event ripples through every one of them. Here's one: **a war disrupts a major oil route, and 5% of the world's oil supply is suddenly cut off.**

**Day 1: commodities.** Oil demand barely responds to price in the short run, so a 5% supply drop pushes oil sharply higher, say from $70 to $110 a barrel. Price up, less sold.

**Day 1: stocks.** Investors rerun their forecasts company by company:

| Company | What changes | Stock |
| --- | --- | --- |
| Oil producers | Every barrel they sell is worth more | Up |
| Airlines and trucking | Fuel, their biggest cost, just jumped | Down |
| Brightpath and most other companies | Higher costs, and customers with less to spend | Down a bit |
| The S&P 500 overall | Most companies lose more than oil companies gain | Down |

**Day 1: currencies.** Oil exporters like Canada and Norway earn more, so their currencies tend to strengthen. Countries that import most of their oil pay more, so theirs weaken. Scared investors move money into US government bonds, which pushes the dollar up.

**Weeks later: inflation.** Oil goes into almost everything. Gas, shipping, flights, plastics and food all get more expensive. Sam's electricity and the shipping on her books go up.

**Weeks later: bonds.** Two forces pull in opposite directions. Inflation fear pushes yields up, as lenders demand more and expect the Fed to raise rates. Recession fear pushes long yields down, as people expect the Fed to cut eventually and buy safe long bonds. Often short yields rise while long yields fall, so the yield curve flattens or inverts. Credit spreads widen, so borrowing gets more expensive for weaker companies right when their costs are rising.

**Months later: the Fed has to choose.** Inflation is up, which says *raise rates*. The economy is weakening, which says *don't*. Rising prices and slowing growth at once is called **stagflation**, and it's the worst situation a central bank can face. If it raises rates, inflation cools but the economy slows further and every asset is repriced down. If it holds, the economy is spared for now, but inflation may become entrenched as people start expecting it.

**Months later: back to Sam.** Families are spending more on gas and groceries, so some cut tutoring. Demand falls while Sam's costs rise. Her profit shrinks from both sides, and her center is worth less, both because its forecast fell and because rates may be rising.

**The loop closes.** If the economy slows enough, people drive less, factories make less, and oil demand falls. The oil price comes back down, partly undoing the shock that started it all.

This is roughly what happened in the 1970s, when oil embargoes helped cause years of high inflation and weak growth in the US.

{{< stuck "Is that it? Is it really this basic?" >}}
The building blocks are that simple: supply and demand, the margin, discounting, opportunity cost. What isn't simple is millions of people using those rules at once and reacting to each other:

- **Everything feeds back.** Oil rises, prices rise, the Fed raises rates, the economy slows, people use less oil, oil falls. Each step is simple. Predicting where the loop ends is hard.
- **Beliefs change the outcome.** If people expect inflation, workers ask for raises and companies raise prices early, which causes the inflation they expected. If investors expect a stock to rise, they buy, and it rises, until it doesn't.
- **Short run and long run differ.** In a week, people can't stop using oil. Over ten years, they buy electric cars and insulate their homes.
- **Some players aren't price takers.** OPEC can cut supply on purpose. Big tech companies can shape their own markets. That needs game theory, not just supply and demand.
- **Some costs never show up in prices**, like burning oil's effect on the climate.
- **You can't run experiments.** You can't rerun 2008 without the bailouts to see what would have happened.

It's like chess. The rules fit on one page. Playing well is hard because of how the pieces interact.
{{< /stuck >}}

---

## What's Next

A market is where buyers and sellers meet, and the price settles where what buyers want matches what sellers offer. Prices move when demand or supply shifts, and whether the amount sold rises or falls tells you which one moved. Financial markets do this in fractions of a second through order books. Stock indexes measure many prices at once, weighted by size, and move together when shared forces shift: rates, growth and fear. Bond yields set the price of borrowing for everyone. Commodities are priced by pure supply and demand, and because some, like oil, are hard to do without, small shortages cause big swings. Currencies are priced the same way, mostly by interest rates, inflation and fear, and some governments choose to hold them fixed. And all of these are connected, so one event moves every market at once.

Part 5 is about inflation: how it's measured, what causes it, who wins and loses, and how central banks fight it.
