---
title: "Why Prices Rise"
tags: ["Economics", "First Principles", "Inflation", "Interest Rates"]
date: 2026-11-06
draft: false
series: "Economics from Scratch"
series_order: 5
summary: "What inflation is and how it's measured, the four things that cause it, who wins and who loses, why the Fed aims for 2% instead of zero, how hyperinflation happens, and how all of it came together in 2021 to 2023."
---

[Part 4](/posts/economics-markets/) showed how a single price gets set: it settles where what buyers want matches what sellers offer. Inflation is what happens when prices across the whole economy rise together.

I'd always thought of inflation as one number in the news. It turned out to be the place where everything earlier in this series meets: money from Part 1, interest rates from Part 2, valuations from Part 3 and markets from Part 4. It's also where expectations matter most.

As before, I've kept the questions I had along the way and what cleared them up.

---

## What Inflation Is and How It's Measured

- **Price level:** the average price of everything people buy.
- **Inflation:** the price level rising over time. The **inflation rate** is how fast, usually per year.
- **Purchasing power:** how much a dollar actually buys. Inflation is purchasing power falling.
- **Consumer Price Index (CPI):** the main US measure. The Bureau of Labor Statistics tracks the prices of a big **basket** of what households buy, like rent, groceries, gas, haircuts, cars and doctor visits, weighted by how much people spend on each.
- **Core inflation:** inflation leaving out food and energy, whose prices swing a lot from month to month.
- **Disinflation:** inflation slowing down. Prices still rise, just more slowly.
- **Deflation:** the price level actually falling.

Say Sam's monthly spending is three things:

| Item | Year 1 | Year 2 | Change |
| --- | --- | --- | --- |
| Rent | $1,000 | $1,040 | +4% |
| Groceries | $400 | $424 | +6% |
| Gas | $100 | $130 | +30% |
| **Total basket** | **$1,500** | **$1,594** | **+6.3%** |

**Headline inflation** is the whole basket: 6.3%. It isn't the average of the three changes, which would be 13%. Each item counts by how much of the budget it takes. Gas jumped 30%, but it's a small part of Sam's spending, so it moves the total less than rent does.

**Core inflation** leaves out food and energy, so here it's just rent: 4%. Gas and groceries jump around with weather, wars and harvests. Core shows the slower, stickier trend underneath, which is usually a better guide to where inflation is heading.

**Purchasing power fell.** Sam needs $1,594 to buy what $1,500 bought a year ago. Each of her dollars buys about 6% less.

**Small rates add up.** Inflation compounds, like interest does. At 3% a year, prices double in about 24 years, using the rule of 72: 72 ÷ 3 = 24. A dollar kept in cash today buys only half as much a generation from now.

**Your inflation isn't the official number.** The CPI is an average basket. If you rent in an expensive city and don't drive, your own inflation could be well above or below it.

As of September 2026, US consumer prices were **3.7% higher** than a year earlier, well above the Fed's 2% goal.

{{< stuck "What is the CPI exactly, and what would \"true\" inflation be?" >}}
Every month, the Bureau of Labor Statistics:

1. **Decides what's in the basket.** A large survey records what households actually spend money on. If housing is about a third of typical spending, it gets about a third of the weight.
2. **Collects prices.** Tens of thousands of them across about 75 US cities: the same cereal at the same store, the rent on the same apartments, a haircut, a doctor visit, a used car.
3. **Computes the change.** For each item it compares this month's price with last month's, then takes a weighted average.
4. **Updates the index.** The index was set to 100 for 1982 to 1984, and each month's change is added on top. Today it's about 337, so things cost about 3.4 times what they did then.

So the CPI is the weighted average price change of a fixed basket of what typical households buy.

What we really want to know is how much more it costs to live as well as you did last year. A fixed basket misses a few things:

| Problem | Example | Effect |
| --- | --- | --- |
| Substitution | Beef gets expensive, so you buy chicken. You're about as well off and spent less than the CPI assumes. | Overstates inflation |
| Quality | A $1,000 phone today does far more than a $1,000 phone five years ago. | Overstates inflation |
| New products | A new medicine makes life better but wasn't in last year's basket. | Overstates inflation |
| Cheaper stores | People shift to discount stores and online shopping. | Overstates inflation |

The government corrects for some of this. After a 1996 review called the Boskin Commission, economists estimated the CPI still overstates true inflation by roughly half a percentage point a year. So a measured 2% is more like 1.5% in true cost-of-living terms.
{{< /stuck >}}

{{< stuck "What's PCE, and why does the Fed use it instead?" >}}
**PCE**, the Personal Consumption Expenditures price index, is a second inflation measure, published monthly by the Commerce Department a couple of weeks after the CPI. When the Fed says "2% inflation," it means 2% on PCE.

| | CPI | PCE |
| --- | --- | --- |
| What it counts | Only what households pay out of pocket | Everything spent on households, including what others pay for them, like employer health insurance or Medicare |
| Where the weights come from | A survey of household spending | Business sales data |
| How often the basket changes | Periodically | Every period, so it quickly reflects people switching from beef to chicken |

Housing counts for less in PCE, because its broader scope includes things like healthcare paid by others. So when rents are rising fast, CPI looks worse. PCE usually runs about 0.3 to 0.5 points below CPI, mainly because it handles substitution better. The Fed prefers PCE because it covers more of what people actually consume. CPI gets the headlines because it comes out first, and it's the one used to adjust Social Security payments and tax brackets.
{{< /stuck >}}

---

## What Causes It

The price of tutoring rose when demand outran supply. Inflation is the same thing across the whole economy at once: people trying to buy more than the economy can produce, or the economy suddenly able to produce less.

- **Capacity:** the most the economy can produce with the workers, machines and materials it has right now.
- **Demand-pull inflation:** prices rise because total spending grows faster than capacity.
- **Cost-push inflation:** prices rise because producing things got more expensive, often from a **supply shock** like an oil cutoff.
- **Money supply:** how much money exists: cash plus the deposits banks create when they lend.
- **Inflation expectations:** how much inflation people *think* is coming.
- **Wage-price spiral:** rising prices lead workers to demand higher pay, which raises costs, which raises prices again.

**Demand outruns capacity.** Sam's town can teach about 120 students, since that's how many tutors and classrooms exist. Then every family gets a $2,000 government check and starts spending more on everything, tutoring included.

| Situation | What the extra spending does |
| --- | --- |
| The town has slack: empty spots, tutors looking for work | Centers fill the empty spots. More students get taught, and prices barely move. |
| The town is at capacity: every spot full, every tutor busy | Centers can't teach more students quickly. The extra money just bids up the price. |

This is the most important idea here: **extra spending turns into more output when there's slack, and into inflation when there isn't.** The same check can be harmless in a recession and inflationary in a boom.

**Costs jump.** Rents in town double, and electricity rises because of an oil shock. Every center's costs go up at once, so they all raise prices, and some close, so fewer students get taught. Prices up, output down.

**Too much money.** If everyone suddenly had twice as much money and nothing else changed, prices would roughly double. More generally, if money grows much faster than the stuff the economy produces, the extra money mostly raises prices: "too much money chasing too few goods." It's really the first cause seen from the money side, since new money gets spent. Fast money growth can come from banks lending heavily, or from a central bank creating money to pay for government spending.

**Expectations.** Suppose everyone in town starts expecting 5% inflation next year:

1. Leo asks Sam for a 5% raise, so his pay keeps up.
2. Sam raises her fees 5% to cover his raise and her rising costs.
3. Parents see prices rising 5%, so they ask their own employers for 5% raises.
4. Those employers raise their prices to cover the raises.

Inflation of 5% happens because everyone expected it. Once that loop gets going, it's a wage-price spiral, and it's very hard to stop. That's why the Fed cares so much about **credibility**: if people trust it to keep inflation near 2%, they don't build in 5%, and the loop never starts.

| Cause | What's happening | Does a Fed rate hike help? |
| --- | --- | --- |
| Demand outruns capacity | Too much spending | Yes. Higher rates cut spending, which is the problem. |
| Costs jump | Too little supply | Only painfully. Rates can't create more oil, so the Fed has to cut demand to match the lower supply, which costs jobs. |
| Too much money | Money growing far faster than output | Yes, if the central bank stops creating it |
| Expectations | People expect inflation, so it happens | Yes, mainly by convincing people it's serious |

Real inflation usually mixes several causes, which is why economists argue about every episode.

{{< stuck "How is stagflation different from inflation?" >}}
Stagflation is inflation **plus** a weak economy, at the same time: "stagnation" plus "inflation." Ordinary inflation usually comes with a strong economy, where people are spending a lot and prices rise because demand outruns capacity.

| | Inflation in a boom | Stagflation |
| --- | --- | --- |
| Prices | Rising | Rising |
| Economy | Growing fast | Slowing or shrinking |
| Jobs | Plentiful | Being lost |
| Usual cause | Too much demand | A supply shock, like an oil cutoff |
| What the Fed does | Raise rates, which cools both problems at once | Stuck. Raising rates fights inflation but deepens the slump; cutting helps jobs but feeds inflation. |

In a boom, the cure is clear. In stagflation, every option hurts. The classic case is the US in the 1970s, when oil embargoes pushed prices up while growth stalled. It ended only when the Fed, under Paul Volcker, raised rates to nearly 20% around 1980, which killed inflation but caused a severe recession first.
{{< /stuck >}}

---

## Who Wins and Who Loses

- **Real wage:** your pay adjusted for inflation, meaning how much it actually buys.
- **Fixed payment:** an amount set in dollars that doesn't change with prices: a fixed-rate loan, a bond's interest payments, many pensions.
- **Indexed:** automatically adjusted for inflation. US Social Security payments rise with the CPI, for example.
- **Expected and unexpected inflation:** what people planned for, and the surprise on top.

**Expected inflation does little harm**, because people build it into rates, wages and prices ahead of time. It's **unexpected** inflation that shifts wealth around. Say everyone expected 2% inflation this year, and it came in at 6%.

**Sam, the borrower.** Her $5,000 loan charges a fixed 8%. She and the bank both expected 2% inflation, so they thought of it as roughly 6% in "real" terms: the bank gets back about 6% more buying power than it lent. With 6% inflation, the real rate is only about 2%. Sam repays in dollars that buy less than the ones she borrowed. **Sam wins, the bank loses.**

**Leo, the worker.** He got a 3% raise, which seemed fine when inflation was expected at 2%. With prices up 6%, his pay buys about 3% less than last year. **Leo loses**, at least until his next raise catches up, which often takes a year or more.

**A saver with cash.** $10,000 sits in an account paying 1%. After a year it's $10,100, but things cost 6% more, so it buys about what $9,500 did a year ago. She lost about $500 of buying power without spending anything. That's the **inflation tax** on holding cash.

**A homeowner with a fixed mortgage.** Someone locked in a 30-year mortgage at 3%. Inflation pushes up their wages and their house's price, but the payment stays the same, so each year it's a smaller share of their income. **Big win.** Many Americans who locked in very low rates around 2020 and 2021 were in exactly this position when inflation hit.

**A retiree.** One with a fixed private pension loses: the same check buys less every year. One living on Social Security is protected, since it's indexed.

**The government.** It's the biggest borrower of all, and inflation shrinks the real value of what it owes. That's one reason people worry governments might be tempted to tolerate inflation.

| Who | Surprise inflation | Why |
| --- | --- | --- |
| Borrowers at fixed rates | Win | They repay in cheaper dollars |
| Lenders and bondholders | Lose | They get paid back in cheaper dollars |
| People holding cash | Lose | Cash buys less every month |
| Workers | Lose at first | Prices rise before wages catch up |
| Owners of land, homes, businesses | Often roughly even over time | Rents, prices and profits tend to rise with inflation |
| People on fixed incomes | Lose | Same check, higher prices |
| Anyone with indexed income | Protected | Payments rise with prices |
| Governments with big debts | Win | Debt shrinks in real terms |

The pattern: **inflation moves wealth from lenders and savers to borrowers.** It often hits poorer households hardest. They spend a bigger share of income on food, energy and rent, which tend to rise fast, and hold more of their savings in cash rather than in homes or stocks that keep up.

There's also a cost nobody wins from: uncertainty. When nobody knows what prices will be next year, it's harder to sign contracts, plan investments or set wages, and people spend energy protecting themselves instead of producing things.

---

## Why the Fed Aims for 2%, Not Zero

If inflation hurts, why not aim for zero? Because falling prices turn out to be more dangerous, and a little inflation gives the economy room to adjust.

- **Deflationary spiral:** falling prices causing less spending, which causes prices to fall further.
- **Zero lower bound:** central banks can't cut interest rates much below zero, because people would just hold cash instead.
- **Sticky wages:** employers almost never cut people's pay in dollars, even when business is bad.

Suppose prices across the economy start falling 3% a year.

**Families wait.** If tutoring will be cheaper next year, some families postpone signing up. Sam has less demand now, so she cuts prices further, which makes waiting even more sensible. The same logic hits cars, houses and business equipment, and the whole economy slows.

**Sam's debt gets heavier.** Her loan payments are fixed in dollars, but her fees are falling, so each year repaying takes a bigger share of what she earns. In a deflation, **borrowers lose and lenders win.** If enough borrowers can't pay, banks take losses and lend less. Since banks create money when they lend, less lending means less money, less spending, and prices fall further. This is **debt deflation**, and it's a big part of why the Great Depression was so severe: US prices fell by roughly a quarter from 1929 to 1933.

**The Fed runs out of room.** To fight a slump, the Fed cuts rates, but it can't go much below zero. With rates at 0% and prices falling 3%, borrowing still costs 3% in real terms, right when the economy needs it to be cheap.

| Reason | How 2% helps |
| --- | --- |
| A buffer against deflation | Inflation drifts a point or two either way. Aiming at 2%, a bad year lands near 0%, not in a spiral. |
| Room to cut rates | Normal interest rates sit a couple of points higher, so the Fed can cut further before hitting zero |
| Sticky wages | Real pay can fall without anyone's paycheck shrinking |
| Measurement | The CPI slightly overstates true inflation, so measured 2% is more like 1.5% |
| Low enough not to matter | At 2%, prices double roughly every 36 years. Day to day, almost nobody has to plan around it. |

**Sticky wages, worked through.** After an AI tutor arrives, demand for human tutors falls, and tutors' pay needs to come down about 5% in real terms, from Leo's $600 a month to the equivalent of about $570.

| | With 0% inflation | With 2% inflation |
| --- | --- | --- |
| What Sam has to do | Cut Leo's pay from $600 to $570 | Keep Leo at $600 and give no raises for about 2.5 years |
| What Leo sees | A pay cut | The same paycheck |
| What happens to his real pay | Down 5% | Prices rise about 5%, so $600 buys what $571 used to. Down 5%. |

The real outcome is identical. But almost nobody accepts a smaller number on their paycheck. It feels unfair and hurts morale, so employers avoid it and often lay people off instead. With a little inflation, real pay can adjust quietly, and fewer people lose their jobs.

The 2% number isn't a law of nature. New Zealand's central bank adopted the first formal inflation target around 1990, most rich countries settled on about 2%, and the Fed made 2% its official goal in 2012.

**Good falling prices and bad deflation.** TVs, computers and solar panels have gotten far cheaper for decades because we got better at making them. That's productivity, and it makes people richer: same money, more stuff. What's dangerous is the *whole* price level falling because people aren't spending, and that loop feeding on itself. Japan lived with mild deflation and weak growth for much of the late 1990s and 2000s, which is a big reason central banks fear it.

That distinction will matter for AI. If AI makes certain services much cheaper to produce, that's the good kind, like TVs. The question is whether it stays limited to those services or hits wages and spending broadly enough to become the bad kind.

{{< stuck "How can anyone aim inflation? And what is a real rate?" >}}
The real rate first. The **nominal rate** is the rate in dollars, the number on the loan or savings account. The **real rate** is how much more *stuff* the interest lets you buy. Lend $100 at 5% for a year when apples cost $1:

| | Today | One year later |
| --- | --- | --- |
| Your money | $100 | $105 |
| Price of an apple (3% inflation) | $1.00 | $1.03 |
| Apples your money buys | 100 | $105 ÷ $1.03 ≈ **102** |

5% more dollars, but only about **2% more apples**. That 2% is the real rate. Roughly, real rate ≈ nominal rate − inflation:

| Inflation | Dollars back | Apples you can buy | Real rate |
| --- | --- | --- | --- |
| 0% | $105 | 105 | +5% |
| 3% | $105 | 102 | +2% |
| 5% | $105 | 100 | 0% |
| 7% | $105 | 98 | −2% |

At 7% inflation, lending made you poorer. For a borrower it's the reverse: a 5% loan when inflation is 7% is effectively being paid to borrow, which is why people borrow and spend a lot when real rates are low.

The Fed can't set inflation directly. It steers it like a thermostat: above 2%, raise rates so borrowing costs more, spending cools and prices rise more slowly; below 2%, cut. Three things make it harder than a thermostat:

1. **It's slow.** A rate change takes a year or two to fully reach spending and prices, so the Fed acts on forecasts, not today's number.
2. **It has to move the real rate.** If inflation rises from 3% to 5% and the Fed raises its rate from 4% to 5%, the real rate actually fell from +1% to 0%. To cool things down, it has to raise rates by more than inflation rose.
3. **Expectations do part of the work.** By announcing 2% and showing it will act, the Fed gets people to expect 2%, and they set wages and prices around it.

That's why 2% gives room to cut. In a recession the Fed wants a negative real rate. With 2% inflation, cutting to 0% gives a real rate of about −2%. With 0% inflation, cutting to 0% only gets it to 0%, and the Fed can't go further.
{{< /stuck >}}

---

## When It Spirals: Hyperinflation

- **Hyperinflation:** prices rising extremely fast. A common definition is more than 50% *a month*.
- **Monetizing the deficit:** a government spends more than it collects in taxes, can't borrow the difference, so its central bank creates new money to pay for it.
- **Flight from the currency:** people trying to get rid of their money as fast as possible.
- **Dollarization:** a country giving up its own currency and using someone else's, usually the US dollar.

Say the town's government can't cover its spending. Taxes fall short, nobody will lend to it, so it pays its bills with newly printed money.

1. **More money, same stuff.** Prices rise, say 10% this month.
2. **Taxes arrive late.** They're collected on last month's income, so by the time they come in, they buy 10% less. The gap grows, so the government prints more.
3. **People stop holding money.** Once everyone expects prices to keep rising, holding cash means losing value every day. Leo spends his pay the moment he gets it. Families pay for tutoring months in advance. Money changes hands faster, pushing prices up further.
4. **Contracts break.** Sam stops charging in local money and asks for dollars, or groceries. Leo insists on being paid daily, then twice a day.

Each step feeds the next: the expectations loop with no brake on it. At 50% a month, compounding is brutal:

| After | Prices are |
| --- | --- |
| 1 month | 1.5 times higher |
| 6 months | about 11 times higher |
| 1 year | about **130 times** higher |

| | Germany, 1923 | Zimbabwe, 2008 | Venezuela, from about 2016 |
| --- | --- | --- | --- |
| Why the government couldn't pay | War reparations, and a major industrial region occupied | Spending far above revenue | Oil income collapsed |
| Production fell | The occupied region stopped producing | Farm output collapsed after a chaotic land reform | Oil and industry declined |
| At the peak | Prices doubling every few days; $1 was worth about 4.2 trillion marks | Prices estimated to double about every day | Prices up over a million percent in a year |
| How it ended | A new currency, at 1 new unit for 1 trillion old marks, plus a balanced budget | Switched to the US dollar and other foreign currencies | Partly dollarized |

Hyperinflation isn't ordinary inflation turned up a bit. It's a **collapse of trust in the money itself**. Modern money is worth something only because people expect others to accept it tomorrow. It's also why most countries make their central banks independent: if politicians can order money printed to pay their bills, the temptation is always there.

{{< stuck "Why would a government print so much? Couldn't it slow down and cut spending?" >}}
Slowing down and cutting spending is the cure, and it's how every hyperinflation ends. Governments don't do it sooner for a few reasons.

**The alternatives hurt right now.** Closing a budget gap means raising taxes or cutting pensions, public wages, food and fuel subsidies or the army. Those hurt identifiable people immediately, and governments in this position are usually weak already. Printing feels painless at first. Nobody votes for it, and the cost shows up later as rising prices that can be blamed on someone else.

**Printing stops working once people catch on.** Printing only pays the bills because people are willing to hold the money; it's a tax on everyone holding cash. Once inflation starts, people hold less, so each round raises less. Say the government needs $100 of real goods a month:

| Stage | Money people will hold, in real value | Money supply growth needed to raise $100 | Result |
| --- | --- | --- | --- |
| Early | $1,000 | 10% a month | Prices rise about 10% a month |
| People start avoiding cash | $500 | 20% a month | Faster |
| People spend pay instantly | $250 | 40% a month | Faster still |
| Nobody holds it | $100 | 100% a month | Hyperinflation |

The government has to print faster and faster to raise the *same* real amount, because the pool it's taxing keeps shrinking. "Slow and steady" works only while people trust the money, and the printing itself destroys that trust.

**Once trust is gone, slowing down doesn't stop it.** If people expect prices to double next month, they keep acting on that even if printing slows a little. That's why hyperinflations end with a sharp, visible break. Germany introduced a new currency *and* balanced its budget at the same time. Zimbabwe gave up its own currency entirely. The government has to prove it *can't* print, not just promise to print less.

**Some debts can't be printed away.** If a government owes dollars, printing its own currency means selling it to buy dollars, which pushes the currency down and makes the dollar debt bigger.

Moderate deficits partly covered by a central bank do happen, and they cause moderate inflation, not collapse. Hyperinflation happens when the gap is too big, the government is too weak to close it, and printing substitutes for a decision nobody wants to make.
{{< /stuck >}}

{{< stuck "Couldn't a government print money only to repay its debt, without putting it into the economy?" >}}
Repaying debt *is* putting money into the economy, through a different door. When the government repays a bond, whoever held it, a pension fund, a bank, a family, now has cash instead, and nobody holds extra cash for long. The bank lends it out, maybe to Sam for a second classroom. She spends it on desks and a new tutor, and they spend it in turn. And once lenders see debts being repaid with printed money, they demand much higher rates or stop lending, which makes the budget problem worse.

The twist is that something close to this has happened without causing inflation. After 2008, the Fed created trillions of dollars to buy government bonds from banks and investors, called **quantitative easing (QE)**. Many predicted high inflation. It didn't come for more than a decade:

| Why QE after 2008 didn't cause much inflation | The idea behind it |
| --- | --- |
| The economy had lots of slack | Extra money becomes output, not inflation, when there's room to produce more |
| Banks mostly kept the new money as reserves at the Fed | Reserves sitting at the Fed aren't being spent |
| People trusted the Fed to reverse it | Nobody started expecting inflation |
| The Fed bought bonds to steer the economy, not to fund spending the government couldn't pay for | The difference between this and hyperinflation |

So creating money to buy or repay debt isn't automatically inflationary. It depends on whether the people who get it spend it, whether the economy has room to produce more, and whether people trust it's temporary.
{{< /stuck >}}

---

## A Real Case: 2021 to 2023

The inflation after the pandemic had all four causes at once.

**Demand.** In 2020 and 2021 the US government spent about $5 trillion on pandemic relief, including checks sent straight to households. Unlike QE after 2008, this money went to people who spent it.

**Supply.** Factories shut, ports jammed and chips ran short. Stuck at home, people bought furniture, electronics and cars instead of travel and restaurants, and supply chains couldn't keep up. Then Russia invaded Ukraine in February 2022, and energy and food prices jumped.

**Money.** The Fed cut rates to zero and restarted QE on a huge scale. The money supply grew about 25% in 2020 alone.

**Expectations.** Through 2021, the Fed called the price rises "transitory," expecting them to fade as supply chains healed. As they kept going, workers pushed for bigger raises and businesses raised prices more readily.

US inflation peaked at **9.1%** in June 2022, the highest in four decades. The Fed then raised its rate from near zero to 5.25 to 5.5% by July 2023, the fastest increase since Volcker. Rising rates did what they always do to bonds: they lost value. Silicon Valley Bank had put depositors' money into long-term bonds, and when their value dropped and depositors pulled out in a panic over a couple of days, it failed in March 2023.

Unlike under Volcker, inflation came down without a recession. Unemployment stayed low through 2022 and 2023. Economists call that a **soft landing**. Inflation fell to around 3% by mid-2023, but it has stayed above the 2% target since, and new tariffs have added to prices.

{{< stuck "So is all of economics just expectations?" >}}
A lot of it, but not all. What made it clear was thinking in two layers.

**The real layer is what actually gets made:** workers, machines, land, oil, know-how, and how well they're combined. If a drought destroys the wheat, there's less bread, whatever anyone expects. Expectations can't conjure tutoring spots that don't exist.

**The price layer is what things are worth and cost:** money, interest rates, stock prices, exchange rates, inflation. Almost every price is a bet about the future:

| What | The expectation behind it |
| --- | --- |
| A stock price | Future profits |
| A bond yield | Future Fed rates and inflation |
| Inflation | What people expect prices to do |
| An exchange rate | Future rates, inflation and safety |
| Whether money works at all | That others will accept it tomorrow |

Expectations dominate the short run, and the real layer wins in the long run, because expectations are guesses *about* the real layer and reality eventually grades them. A company priced on huge expected growth falls if the profits never come. Inflation expectations can create inflation for a while, but they can't make a country richer. Most of the drama, crashes, booms and inflation scares, happens when expectations get out of line with the real layer and snap back.

For AI, the real-layer question is whether it actually raises productivity. The price-layer question is what people *expect* it to do, which is what's driving AI valuations today. The two can be far apart for a while.
{{< /stuck >}}

---

## What's Next

Inflation is the price level rising, measured with a weighted basket. It comes from spending outrunning capacity, costs jumping, money growing too fast, and expectations that make themselves true. Unexpected inflation moves wealth from lenders and savers to borrowers. Central banks aim for about 2% rather than zero because deflation is more dangerous and a little inflation gives wages and interest rates room to adjust. Hyperinflation is a different thing: a collapse of trust in money when a government prints to pay its bills.

Pulling five parts together: economics is how people use limited resources to produce what others value. Output comes from labor and capital, multiplied by productivity. Prices, set by supply and demand, coordinate who makes and gets what. Money and credit move resources across people and time, with interest as the price of time. What anything is worth is its future benefits discounted to today, so prices run on expectations, while the real economy decides in the end whether those expectations were right. And who captures the value depends on bargaining power, not just on who creates it.

That can sound like a description of capitalism. Part 6 sorts out which parts every economy shares and which parts are where capitalism and socialism actually disagree, starting from what it means to own a business.
