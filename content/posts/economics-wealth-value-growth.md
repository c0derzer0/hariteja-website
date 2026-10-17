---
title: "Where Wealth Actually Comes From"
tags: ["Economics", "First Principles"]
date: 2026-10-16
draft: false
series: "Economics from Scratch"
series_order: 1
summary: "Learning economics from the definitions up, the way I'd learn a new ML subfield. Part 1: what wealth is, how value gets created and split, marginal thinking, opportunity cost, what growth means, and where money comes from, all worked through one small tutoring center."
---

I want to understand what AI will do to the economy: to wages, to jobs, to who gets rich and who doesn't. I realized I couldn't reason about that well without the basics. Most takes on AI and labor skip straight to conclusions, and I couldn't tell which ones were built on solid ground.

So I'm learning economics the way I'd learn a new ML subfield: start from definitions, make sure each one is precise, and only then build up. These are my notes. They're written for someone like me, technical but new to the field.

To keep things concrete, I'll run every idea through one example.

---

## The Example

Sam runs a small tutoring center.

- 2 tutors, each teaching 10 students
- Parents pay $100 a month per student
- Books, supplies and electricity cost $200 a month
- Each tutor is paid $600 a month
- Sam borrowed $5,000 from a bank to open the center

That's 20 students and $2,000 a month coming in.

---

## What Is Wealth?

**Wealth is a stock of things that can provide benefits in the future.**

**Stock** means an amount measured at one point in time. If you froze time today and listed everything Sam owns (the classroom, the books, the money in her account, her own teaching skill), that list is a stock. Her monthly profit isn't part of it. Profit arrives over time, and it adds to the stock.

**Future benefits** means what something will do for you from now on. The classroom is wealth because students can be taught in it for years to come. If the building were condemned tomorrow, it would be worth nothing, no matter what Sam paid for it. What something cost in the past doesn't matter. What it can do going forward does.

Wealth comes in two kinds, and it's worth separating them early. One kind actually adds to what a society has. The other only records who owes what to whom. Mixing them up leads to classic mistakes, like believing a country gets richer by printing money or piling up debt.

- **Real wealth** is the actual productive stuff: land, buildings, tools, skills, knowledge.
- **Financial wealth** is claims: cash, bank deposits, loans, stocks, bonds.

To tell them apart, ask: *is it someone else's debt?* A bank deposit is money the bank owes you. A loan is money someone owes the bank. Every financial asset is one person's asset and another person's obligation. Real wealth isn't owed by anyone. A classroom just exists.

Here's Sam's center sorted that way:

| Item | Kind | Who owns it |
| --- | --- | --- |
| Classroom and books | Real | Sam |
| Reputation with parents | Real | Sam, loosely |
| Tutors' teaching skill | Real | **The tutors** |
| Sam's bank balance | Financial | Sam (the bank owes it to her) |
| The $5,000 loan | Financial | The bank (Sam owes it) |

Sorting it this way shows two things you'd never see from the center's revenue or bank balance.

**First, the most valuable asset isn't Sam's.** What parents really pay for is the tutors' ability to teach. Sam doesn't own that. If her best tutor quits tomorrow, the center loses its most valuable asset and she can't stop it. Economists call skill **human capital**, and for most working people it's their largest asset, bigger than savings or a house. But it's an odd asset. You can't sell it, can't borrow against it, it fades if unused, and it's worth only what the market will pay for it. That last point will matter a lot later in this series.

**Second, financial claims cancel out.** Sam's $5,000 loan is an asset for the bank and an equal debt for her. Add up every claim in an economy and they net to zero. Creating more claims doesn't make a society richer. Only more real wealth does.

That doesn't make finance pointless. *Net to zero* is not the same as *zero-sum*. The loan let Sam open a center that now teaches 20 students. Both she and the bank came out ahead. Financial claims are plumbing that moves resources to people who can create real wealth.

**Land is a useful edge case.** It's real wealth, since nobody owes it. But no one can make more of it, and that changes how its value behaves. Say Sam owns the small lot her center sits on, worth $20,000. A subway station opens nearby, and the lot is now worth $40,000. Sam is $20,000 richer, yet nothing new exists: no extra classroom, no better teaching. Her gain comes from what future buyers or renters will have to pay for that spot. It's money moving from them to her, a **transfer**. Compare that with Sam hiring a great tutor whose students learn more. That's value that didn't exist before, **creation**.

---

## Creating Value vs. Capturing It

So far we've looked at what Sam's center *has*. This section is about what it *does*: create value, and split it among the people involved.

**Value is created when something is worth more to people than the resources used up to make it.**

Parents pay Sam $100 a month per student. But what is tutoring actually worth to them? Better grades, a calmer kid, fewer fights over homework. Say each family would happily pay up to $250 a month for it. Then across 20 students:

| | Per month |
| --- | --- |
| Worth to parents (20 × $250) | $5,000 |
| Resources used up (books, supplies, electricity) | −$200 |
| **Value created** | **$4,800** |

That $4,800 didn't exist before the center opened. It's new.

Who gets it is a separate question. Economists call this **value capture**: how much of the value each party ends up with.

| Who | How | Captures |
| --- | --- | --- |
| Parents | Worth $250, paid $100, 20 students | $3,000 |
| Tutors | Wages, 2 × $600 | $1,200 |
| Sam | What's left: $2,000 − $200 − $1,200 | $600 |
| **Total** | | **$4,800** |

Three things in this table are easy to miss.

**Wages aren't lost value.** From Sam's point of view, the tutors' pay is a cost. From everyone's point of view combined, it's just the tutors' share of the $4,800. If the tutors took everything and Sam made zero profit, the center would still have created exactly the same value. Only the split would change.

**The biggest share went to the parents.** The gap between what something is worth to you and what you pay for it is called **consumer surplus**. Parents get $150 of value per month per child that they never pay for. It's often the largest slice, and it's easy to forget because no money changes hands for it.

**The official numbers miss most of it.** GDP, the standard measure of an economy's output, counts only what's paid for, minus what's used up: $2,000 − $200 = $1,800. That's the tutors' $1,200 plus Sam's $600. The parents' $3,000 never shows up. This matters later: when a service gets much cheaper, much of the gain can land in exactly this invisible slice.

What decides the split? Mostly **bargaining power**: how easy you are to replace, what alternatives the other side has, and whether you own something others need. If tutors were scarce, they could demand more pay. If there were five other centers on the same street, Sam would have to cut prices and parents would capture more.

That's also why creating value and capturing it can come completely apart. Open source developers create enormous value and capture almost none of it. A monopoly can capture a lot while creating little.

---

## Thinking at the Margin

The last section was about the value the center creates as it is. The next question is one every business faces: should it get bigger?

**"Marginal" means the next one.** Not the total, not the average. The next unit.

Should Sam hire a third tutor? Here's the tempting reasoning: the center brings in $2,000 a month with two tutors, so each tutor brings in $1,000 on average. A tutor costs $600. So hire another one, and keep hiring.

That's **average thinking**, and it's wrong. What matters is what the *next* tutor adds, not what the current ones average. And the next one won't fill a full class. Only so many families nearby know about the center, so each new tutor finds fewer students than the last.

| Hire | New students | Extra revenue | Extra cost (wage + supplies) | Worth it? |
| --- | --- | --- | --- | --- |
| 3rd tutor | 8 | $800 | $650 | Yes |
| 4th tutor | 4 | $400 | $650 | No |

Each additional tutor adds less than the one before. That's called **diminishing returns**, and it shows up almost everywhere: the third coffee is worth less than the first, the tenth hour of studying teaches less than the second.

Marginal thinking also says to **ignore what's already spent**. Say Sam spent $500 on flyers last month and got zero new students. It's tempting to keep advertising "so the $500 wasn't wasted." But that money is gone no matter what she does next. The only question is whether the *next* dollar of advertising will bring in more than a dollar. Money that's already spent and can't be recovered is called a **sunk cost**, and the rule is to leave it out of the decision.

---

## Opportunity Cost

Marginal thinking asks whether the next step is worth its cost. But what *is* the cost? It's not always the price tag.

**The real cost of anything is the best thing you gave up to get it.** That's called **opportunity cost**. An evening spent studying costs you the evening out you skipped. A tutor's hour at Sam's center costs whatever else that tutor could have done with the hour.

Say one of Sam's tutors, Leo, gets an offer to teach at a private school for $900 a month. Sam pays him $600. If she doesn't raise his pay to around $900, he'll leave. His real cost to Sam isn't $600 anymore. It's what he could earn elsewhere.

This splits into two different questions:

- **Sam's question:** does Leo bring in more than I pay him?
- **Everyone's question:** does Leo create more value at the center than he would somewhere else?

Suppose Leo's teaching is worth $2,400 a month to the families at Sam's center, but at the private school, where classes are bigger, it would be worth $3,000. Then the world is $600 a month poorer with Leo at Sam's center, even if Sam is happy with the deal.

What lines these two questions up is pay. The school can offer Leo more because he's more valuable there, and the higher offer pulls him toward where he does the most good. Nobody has to plan it.

When that pull breaks down, because people are stuck where they are, their skills go unused, or they're turned away for reasons that have nothing to do with ability, economists call it **misallocation**. Each case looks small, but added up across a country, misallocation makes everyone poorer than they could be.

---

## What Growth Means

So far, Sam's center has been a snapshot. But businesses and economies change over time, and the word you hear most about that change is *growth*.

**Growth means output going up.** For Sam, output is students taught. For a country, it's everything produced. There are exactly two ways to get more of it:

1. **Add more inputs.** Sam hires two more tutors, and with enough demand, the center teaches 40 students instead of 20.
2. **Get more out of the same inputs.** Sam switches to small-group sessions with practice software, and each tutor can now teach 20 students well instead of 10. Same two tutors, 40 students.

Both get to 40 students, but they're very different. The first is **extensive growth**: getting bigger. The second is **intensive growth**: getting better. Getting more output from the same inputs is what economists mean by higher **productivity**.

Economists usually write this as one line:

> Output = Productivity × f(Capital, Labor)

- **Labor** is people working: Sam's tutors.
- **Capital** is the tools people work with: the classroom, books, software. (Here capital means physical tools, not money.)
- **Productivity** is how well the two are combined: the teaching method, the schedule, the know-how.
- **f** just means output depends on how much capital and labor you have.

A kitchen is a good way to picture it. Labor and capital are the ingredients. Productivity is the recipe.

The distinction matters because ingredients run into diminishing returns, just like the extra tutors in the margin section. A tenth tutor in a center with one small classroom adds almost nothing. A better recipe has no such ceiling. That's why, over the long run, living standards rise mostly through productivity, not through piling up more workers and more machines.

Which number you watch depends on what you want to know:

| Measure | For Sam's center | What it tells you |
| --- | --- | --- |
| Total output | Total students taught | How big it is |
| Output per person | Students per tutor | How well tutors can eventually be paid |
| Output per input | Students per tutor, per dollar of supplies | Whether it's actually getting better |

The same three apply to a country. A country can grow its total output just by adding people, without anyone getting richer. Growth per person and per input is where better lives come from.

Here's a surprising detail: nobody measures productivity directly. Economists work it out by subtraction. Say Sam goes from 2 tutors and 20 students to 3 tutors and 40 students. The extra tutor explains about 10 more students. The other 10 can't be explained by more people or tools, so they get credited to productivity: a better method, smarter scheduling, more experience. The economist Moses Abramovitz called this leftover "a measure of our ignorance," because it tells you something made things better without saying what. For whole countries over long periods, that leftover turns out to explain most of the growth.

---

## Where Money Comes From

Every section so far has had money in it: fees, wages, a loan. But what is money, and where does it come from?

**Money is a claim on real wealth, not wealth itself.** It's a ticket you can trade for things other people produce. If everyone suddenly had twice as much money and nothing else changed, prices would roughly double and nobody would be any richer. There'd be the same classrooms, the same tutors, the same books.

The surprising part is where money comes from. You'd expect banks to lend out other people's savings. Mostly, they don't.

When Sam took her $5,000 loan, the bank didn't move money out of someone else's account and into hers. It just added $5,000 to her account. No other customer's balance went down. New money now existed that hadn't existed a minute earlier.

On paper, nobody got richer:

| | Sam | Bank |
| --- | --- | --- |
| What they gained | $5,000 in her account | Sam's promise to repay $5,000 |
| What they now owe | $5,000 to the bank | $5,000 to Sam, whenever she withdraws it |
| Change in net worth | $0 | $0 |

Both sides gained something and owe something of equal size. But Sam now had money she could spend. She bought desks and books, which became income for the people who sold them, who then spent some of it on other things, and so on. **One person's spending is another person's income.** That chain is why lending matters so much to an economy, even though a loan creates no wealth by itself.

When Sam pays the loan back, it runs in reverse. She pays from her account, so her balance goes down and her debt goes down by the same amount. That money stops existing. So the amount of money in an economy grows when people borrow more and shrinks when they pay back.

The **central bank** (the Federal Reserve in the US) steers this mainly through the **interest rate**, the price of borrowing. When borrowing is cheap, people and businesses take more loans, more money is created, and more spending flows through the economy. When borrowing is expensive, the reverse happens.

---

## What's Next

This post covered what wealth is, how value gets created and split, how to think about the next step, what growth means, and where money comes from.

The next piece is discounting: why a dollar tomorrow is worth less than a dollar today. It's the idea behind interest rates, bond prices, and how anything gets valued, from a company to a plot of land to a skill. After that come inflation and central banks.

Once the fundamentals are in place, I'll come back to the question I started with: what AI does to all of this, and where that leaves gaps and opportunities.
