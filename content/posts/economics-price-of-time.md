---
title: "The Price of Time"
tags: ["Economics", "First Principles", "Interest Rates"]
date: 2026-10-30
draft: false
series: "Economics from Scratch"
series_order: 2
summary: "Why a dollar today is worth more than a dollar tomorrow, what an interest rate really is, how the Fed sets one rate that every other rate builds on, and the two tools that move money through time: compounding and discounting."
---

[Part 1](/posts/economics-wealth-value-growth/) defined wealth as things that provide benefits in the future. That word "future" kept coming up without an explanation. Land got more valuable when a subway opened nearby, before it earned a single extra dollar. The interest rate showed up as the economy's control knob.

This part is about time: why money now is worth more than money later, what the interest rate actually measures, and how to move money backward and forward through time. Part 3 uses these tools to work out what anything is worth.

We'll keep using Sam's tutoring center from Part 1. And since these are my notes, wherever I got stuck along the way, I've kept the question I asked and the answer that cleared it up.

---

## Money Now Beats Money Later

A parent offers Sam a choice: $1,000 today, or $1,000 a year from now. Same amount. Almost everyone takes it today, for three reasons.

**She could put it to work.** Today's $1,000 can sit in a savings account and grow. Or she can buy books now and teach more students sooner. Waiting means giving that up, which is opportunity cost from Part 1.

**The future is uncertain.** The parent might move away, forget, or go broke. A promise is worth less than cash in hand.

**Prices may rise.** If things cost more next year, $1,000 then buys less than $1,000 now. Prices in general rising over time is called **inflation**. If Sam's books, supplies and electricity cost $200 this month and $206 a year from now, with nothing else changed, prices rose 3%.

So to get Sam to wait, you'd have to offer her more than $1,000 later. How much more is the subject of the next section.

{{< stuck "If inflation affects interest rates, who sets inflation?" >}}
Nobody sets it. Inflation isn't a number anyone picks. It's the result of millions of businesses each raising or lowering their own prices.

The government **measures** it. In the US, the Bureau of Labor Statistics tracks the prices of a large basket of everyday things, like groceries, rent, gas and haircuts, every month, and reports how much the total changed. That's the inflation number in the news.

The Federal Reserve tries to **steer** it, mostly by moving interest rates, and aims for about 2% a year. But it can only nudge it, not set it.
{{< /stuck >}}

---

## The Interest Rate Is the Price of Time

Say Sam thinks it over and decides she's equally happy with $1,000 today or **$1,050** in a year. Anything less and she takes the cash now. Anything more and she waits.

That extra $50 is the reward for waiting. As a share of the $1,000, it's 5%. That's an **interest rate**: how much extra you get for giving up money today and getting it back later. It's a price, but not the price of a thing. It's the price of time.

The same payment looks different from each side:

- **For the borrower, it's a cost.** Sam borrowed $5,000 from a bank to open her center. If the bank charges 8% a year, she pays $400 a year to open now instead of saving up for years first.
- **For the lender, it's income.** The bank receives that $400 for letting Sam use its money. While Sam has the $5,000, the bank can't use it for anything else, and the interest pays it for that.

So interest is the payment from the borrower to the lender for using money over time.

The three reasons money now beats money later are also the three parts of every interest rate:

| Why money now beats money later | What it adds to the rate |
| --- | --- |
| You could have put it to work | A basic reward for waiting |
| The borrower might not pay you back | Extra for risk |
| Prices might rise meanwhile | Extra for expected inflation |

That's why different borrowers pay different rates on the same day. The US government is very unlikely to default, so it borrows cheaply. Sam, a small business with no track record, pays more. A credit card charges even more, because many people never pay it back.

{{< stuck "There's no inflation number in a loan contract. So how would I set a rate if I lent someone money?" >}}
You guess, and build the guess in. Say a friend asks to borrow $1,000 for a year. You'd think it through roughly like this:

1. **What could I get elsewhere?** Whatever a savings account or a government bond pays is your floor. Lending to your friend for less makes no sense.
2. **Will the money buy less when I get it back?** If you expect prices to rise 3%, getting back exactly $1,000 loses you buying power. The safe rate in step 1 usually covers this already, because savers everywhere make the same guess and won't accept less.
3. **How likely am I to be paid back?** If there's a real chance you won't be, add extra on top.

Banks do the same thing with more data. Because they compete, rates for similar borrowers end up close together. If one bank charges Sam 15% when others charge 8%, she goes elsewhere. So rates come from many lenders' judgments, pushed together by competition.
{{< /stuck >}}

---

## Who Sets Interest Rates

You often hear that "the Fed sets interest rates." It doesn't set your rate or Sam's. It sets one rate, at the very bottom of the system, and every other rate builds on it.

**The Federal Reserve is a bank for banks.** You and Sam keep accounts at ordinary banks. Those banks keep accounts at the Fed. The money banks hold there is called **reserves**, and they use it to pay each other.

At the end of each day, some banks have more reserves than they need and some are short, because their customers moved money around. The ones with extra lend to the ones that are short, just until the next day. The rate on those overnight loans is the **federal funds rate**. That's what people mean by "the Fed rate."

{{< stuck "Why would a bank run short? Why can't it just keep what it has?" >}}
Every time Sam pays someone who banks somewhere else, her bank has to send real reserves to the other bank to settle the payment. Millions of payments like this flow between banks every day. On a day when more flows out than in, a bank's reserves drop.

Having less than yesterday is fine. The problem is dropping below what it needs. It's like a checking account: a lower balance is fine, but if rent is due and the balance is too low, the payment bounces. A bank needs reserves to settle its customers' payments, to pay anyone who withdraws, and to meet a cushion regulators require.

It can't just hold a huge pile to be safe, because reserves earn less than loans. So each bank keeps enough to be safe, not more, and borrows overnight on the days it dips below that.
{{< /stuck >}}

The Fed isn't part of those loans. It steers their rate with two rates of its own:

| Rate | Who pays whom | Role |
| --- | --- | --- |
| Interest on reserves | The Fed pays banks on money they keep at the Fed | Floor |
| Federal funds rate | Banks pay each other for overnight loans | The headline "Fed rate" |
| Discount rate | Banks pay the Fed when they borrow from it | Ceiling |

The floor works because no bank will lend to another bank for less than the Fed pays it to do nothing. The ceiling works because no bank will borrow from another bank for more than the Fed charges. So the bank-to-bank rate stays in the corridor between them. When the Fed "raises rates," it moves the whole corridor up. The Fed announces this as a **target range**: at its October 2026 meeting, it kept the range at 3.75% to 4.00%.

Banks only borrow from the Fed when they're stuck, which is why it's called the **lender of last resort**. People and ordinary companies can't borrow from it at all.

{{< stuck "Shouldn't the Fed charge more than banks charge each other? Otherwise everyone would just borrow from the Fed." >}}
Yes, exactly, and that's the point of the ceiling. Because the Fed charges more, banks borrow from each other first and only go to the Fed when they can't get money anywhere else. There's also a social reason: borrowing from the Fed can look like a sign a bank is in trouble, so banks avoid it unless they have to.

The floor works the same way in reverse. Why lend to another bank at 3% when the Fed pays 4.2% for doing nothing?
{{< /stuck >}}

### How one overnight rate reaches Sam

1. The Fed raises the rate it pays banks on reserves.
2. Overnight borrowing between banks gets more expensive.
3. Banks' own cost of money rises, so they charge more on business loans, mortgages and credit cards.
4. Sam's next loan costs more than 8%, and savings accounts start paying more too.

So the Fed sets the cheapest, shortest, safest rate in the economy, and every other lender prices off it, adding their own extra for time, risk and inflation.

{{< stuck "If banks just lend to each other and pass reserves around, is the total amount of money fixed unless the Fed prints more?" >}}
Half right. There are two layers of money, and they behave differently.

| | Who creates it | Who uses it | Fixed total? |
| --- | --- | --- | --- |
| Reserves and cash | The Fed | Banks paying each other, cash in wallets | Yes, unless the Fed changes it |
| Deposits | Ordinary banks, by lending | Everyone else | No, grows and shrinks with lending |

Reserves only move around between banks, so their total stays the same unless the Fed adds or removes them. But as Part 1 showed, when a bank lends Sam $5,000, it types new money into her account. When she repays, that money disappears. So the money people actually spend grows and shrinks with lending.

The Fed controls the first layer directly, and the second only indirectly, through interest rates: cheaper borrowing means more loans, which means more new money. How banks can do this, and what stops them doing it without limit, gets its own section in a later part.
{{< /stuck >}}

---

## Compounding: When Interest Earns Interest

Sam puts $1,000 in a savings account paying 5% a year, and leaves it alone.

- **After year 1:** she earns 5% of $1,000, which is $50. Balance: $1,050.
- **After year 2:** she earns 5% of **$1,050**, not $1,000. That's $52.50. Balance: $1,102.50.

In year 2 she earned an extra $2.50: interest on last year's interest. That's **compounding**. Each year's interest joins the pile, and next year's interest is calculated on the bigger pile.

$2.50 looks like nothing. Over time it isn't:

| Years | With compounding | Without (always 5% of the original $1,000) |
| --- | --- | --- |
| 1 | $1,050 | $1,050 |
| 10 | $1,629 | $1,500 |
| 20 | $2,653 | $2,000 |
| 30 | $4,322 | $2,500 |

The math is one line. Each year the money is multiplied by 1.05, so after *n* years:

> Amount = Starting amount × (1 + rate)ⁿ

A handy shortcut is the **rule of 72**: divide 72 by the rate to get roughly how many years it takes to double. At 5%, about 14 years. At 8%, about 9.

Compounding doesn't care which side you're on. Leave $1,000 unpaid on a credit card at 24% a year, and after three years you owe about $1,907.

It's also why small differences in growth matter so much, which ties back to Part 1. An economy growing 2% a year is about 2.7 times bigger after 50 years. At 3%, it's about 4.4 times bigger. One extra point a year turns into a much richer country two generations later.

---

## Discounting: Compounding Run Backward

Compounding answers: *if I have money today, what will it grow into?* **Discounting** answers the reverse: *if I'll get money in the future, what is it worth today?*

Back to Sam's choice. She was equally happy with $1,000 today or $1,050 in a year. Turn that around: **$1,050 a year from now is worth $1,000 today.** Today's equivalent of a future amount is its **present value**, and the rate you use is the **discount rate**.

The math is compounding flipped. Compounding multiplies by (1 + rate) each year, so discounting divides:

> Present value = Future amount ÷ (1 + rate)ⁿ

### Using it

Someone offers Sam a deal: pay $700 today, get $1,000 in 10 years. Is that good?

You can't compare $700 and $1,000 directly, because they happen at different times. So:

1. **Pick a rate.** What could Sam's $700 earn somewhere else at similar risk? Say a safe account pays 5%.
2. **Discount.** $1,000 ÷ 1.05¹⁰ = **$614**. The promise is worth $614 to her today.
3. **Compare.** They want $700 for something worth $614. Don't buy it.

Now suppose the best safe rate Sam can find is only 3%. $1,000 ÷ 1.03¹⁰ = **$744**. Now the same promise is worth more than its $700 price, so she should buy it. Same offer, opposite answer, because her alternative got worse.

{{< stuck "Why discount at all? Why not grow the $700 forward at 3% and compare in 10 years? And doesn't the 3% compound?" >}}
It does compound: the 1.03¹⁰ in the formula *is* ten years of compounding, just divided instead of multiplied.

And you can grow it forward. You get the same answer. At 3%, $700 grows to $941 in 10 years, which is less than the $1,000 on offer, so buy. Discounting compares at today; growing forward compares in 10 years. Same decision either way.

People usually discount to today for two reasons. First, decisions and prices happen today, so discounting tells you the most you should pay, not just yes or no for one price. Second, most things pay many times, not once. A bond pays every year, a business earns every year, a job pays every month. To add up payments made at different times, you need one common point, and today is the natural one.

For example, $100 a year for 3 years, at 3%:

| Payment | When | Worth today |
| --- | --- | --- |
| $100 | 1 year | $97.09 |
| $100 | 2 years | $94.26 |
| $100 | 3 years | $91.51 |
| **Total** | | **$282.86** |

That whole stream is worth $282.86 today. That's exactly how a bond or a business gets a price, which is where Part 3 picks up.
{{< /stuck >}}

### Two rules

Here's what $1,000 arriving in the future is worth today:

| When it arrives | At 3% | At 5% | At 10% |
| --- | --- | --- | --- |
| 1 year | $971 | $952 | $909 |
| 10 years | $744 | $614 | $386 |
| 30 years | $412 | $231 | $57 |

1. **The further away the money, the less it's worth today.** Read down any column.
2. **The higher the rate, the less future money is worth today.** Read across any row.

Hold onto the second rule. Since the Fed anchors every rate in the economy, it means the Fed can change what everything is worth.

---

## What's Next

This part covered why money now beats money later, what an interest rate is made of, how the Fed sets the rate everything else builds on, and the two tools for moving money through time: compounding forward and discounting back.

Part 3 puts discounting to work. If anything is worth its future benefits brought back to today, we can price a bond, Sam's whole center, a plot of land, a skill, a stock and a startup with the same method. And we'll see why, when interest rates move, the prices of all of them move together.
