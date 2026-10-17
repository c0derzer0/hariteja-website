---
title: "Wealth, Value and Growth, Seen Through One Small Firm"
tags: ["Economics", "AI", "Labor", "First Principles"]
date: 2026-10-16
draft: true
series: "Economics from First Principles"
series_order: 1
summary: "I'm learning economics from the definitions up, the way I'd learn a new ML subfield. Part 1: what wealth is, how value gets created and split, what growth means, and where money comes from, all worked through one small bookkeeping firm. AI shows up at the end as a set of questions."
---

I want to understand what AI will do to the economy: to wages, to jobs, to who gets rich and who doesn't. I realized I couldn't reason about that well without the basics. Most takes on AI and labor skip straight to conclusions, and I couldn't tell which ones were built on solid ground.

So I'm learning economics the way I'd learn a new ML subfield: start from definitions, make sure each one is precise, and only then build up. These are my notes. They're written for someone like me, technical but new to the field.

To keep things concrete, I'll run every idea through one example.

---

## The Firm

Oru runs a small bookkeeping firm. The numbers are made up but realistic enough.

- 4 bookkeepers, each handling 25 small-business clients
- Each client pays $400 a month
- Software, office and supplies cost $4,000 a month
- Each bookkeeper is paid $6,000 a month
- Oru borrowed $60,000 from a bank to set up the office

That's 100 clients and $40,000 a month in revenue. Hold onto these numbers. Every section below uses them.

---

## What Is Wealth?

**Wealth is a stock of things that can provide benefits in the future.**

Two parts of that definition do the work. *Stock* means it's what you have at a moment, as opposed to *income*, which is a flow over time. A lake versus the river feeding it. *Future benefits* means something counts as wealth because of what it can do later. A thing with no future use is worth nothing, whatever it cost.

There are two kinds, and the difference matters more than anything else in this post:

- **Real wealth** is the actual productive stuff: land, buildings, machines, software, skills, knowledge.
- **Financial wealth** is claims: cash, bank deposits, loans, stocks, bonds. Every financial asset is someone else's liability.

The test is simple: *is it anyone's debt?* If yes, it's financial. If not, it's real.

Here's Oru's firm sorted:

| Item | Kind | Who owns it |
| --- | --- | --- |
| Computers, software, office furniture | Real | Oru |
| Client relationships and reputation | Real | Oru, loosely |
| Bookkeepers' skills | Real | **The bookkeepers** |
| Oru's bank balance | Financial | Oru (the bank's liability) |
| The $60,000 loan | Financial | The bank (Oru's liability) |
| Invoices clients haven't paid yet | Financial | Oru (the clients' liability) |

Two things stand out.

First, the most valuable real asset in the firm is the bookkeepers' skill, and Oru doesn't own it. It goes home every evening. Economists call skill **human capital**, and for most working people it's their largest asset, larger than savings or a house. But it's an odd asset. You can't sell it, can't borrow against it, it fades if unused, and it's worth only what the market will pay for it. Keep that last point in mind for the AI section.

Second, financial claims cancel out. Oru's loan is an asset for the bank and a liability for her. Add up every claim in an economy and they net to zero. Printing more claims doesn't make a society richer. Only more real wealth does.

That doesn't make finance pointless. *Net to zero* is not the same as *zero-sum*. The bank's loan let Oru build a firm that now produces something real. Both sides came out ahead. Financial claims are plumbing that moves resources to people who can create real wealth.

**Land** is a useful edge case. It's real wealth, since it isn't anyone's debt. But nobody can make more of it, so when land prices rise because a city gets richer, landowners gain without producing anything. Those gains behave more like transfers than creation.

---

## Creating Value vs. Capturing It

**Value is created when something is worth more to people than the resources used up to make it.**

Oru's clients pay $400 a month. But what is the service worth to them? Say each client values it at $1,000 a month: time they'd otherwise spend on books, plus avoided tax penalties. Then across 100 clients:

| | Per month |
| --- | --- |
| Worth to clients | $100,000 |
| Resources used up (software, office) | −$4,000 |
| **Value created** | **$96,000** |

Now, who gets it? That's **value capture**, and it's a separate question.

| Who | Captures |
| --- | --- |
| Clients (worth $1,000, paid $400) | $60,000 |
| Bookkeepers (wages) | $24,000 |
| Oru (profit) | $12,000 |
| **Total** | **$96,000** |

A few things I didn't appreciate before working through this:

**Wages aren't lost value.** It's tempting to see wages as a cost that eats into value. From Oru's point of view, they are. From society's point of view, wages are just the bookkeepers' share of what got created. If the bookkeepers captured everything and Oru made zero profit, the firm would still have created $96,000 of value.

**The biggest share went to the clients.** The gap between what something is worth to you and what you pay is called **consumer surplus**. It's real value, and it's often the largest slice.

**GDP doesn't see most of it.** GDP measures value added at market prices: here, $40,000 of revenue minus $4,000 of inputs, so $36,000. The $60,000 of client surplus is invisible to it. That matters later, because if AI makes services much cheaper, a lot of the gain may show up as surplus that GDP never counts.

How much each party captures comes down to **bargaining power**: how replaceable you are, what alternatives the other side has, and whether you own anything. Value creation and value capture can come completely apart. Open source maintainers create enormous value and capture little. Monopolies can capture a lot while creating little.

---

## Thinking at the Margin

**"Marginal" means the next one.** Not the total, not the average.

Should Oru hire a fifth bookkeeper? The tempting reasoning: each bookkeeper brings in $10,000 of revenue on average and costs $6,000, so yes, and keep hiring.

That's average thinking, and it's wrong. What matters is what the *next* hire adds. Oru's referrals are running thin, so a new bookkeeper won't find 25 clients.

| Hire | New clients | Extra revenue | Extra cost | Worth it? |
| --- | --- | --- | --- | --- |
| 5th | 20 | $8,000 | $6,500 | Yes |
| 6th | 10 | $4,000 | $6,500 | No |

Each additional bookkeeper adds less than the one before. That's **diminishing returns**, and it shows up almost everywhere. The marginal question also tells you to ignore what's already spent. If Oru sunk $20,000 into a marketing campaign that flopped, that money is gone either way. The only question is whether the *next* dollar is worth spending.

---

## Opportunity Cost

**The real cost of anything is what it could have done otherwise.**

Tav, one of Oru's bookkeepers, could get a job as a data analyst paying $9,000 a month. If Oru keeps paying him $6,000, he'll leave. To keep him she has to pay roughly what he could earn elsewhere.

There are two different questions here:

- **Oru's question:** does Tav bring in more than I pay him?
- **Society's question:** does Tav create more value here than he would elsewhere?

If Tav creates $8,000 of value as a bookkeeper but would create $12,000 as an analyst, the world is poorer with him at Oru's firm, even if Oru is happy.

Wages are what line these two questions up. A higher-paying job elsewhere pulls Tav toward where he's more productive. When that mechanism breaks, because people are stuck, skills go unused, or hiring is discriminatory, economists call it **misallocation**, and it makes a whole country poorer than it could be.

---

## What Growth Means

**Growth means output going up.** There are exactly two ways to get it:

1. **Add more inputs.** Oru hires two more bookkeepers and serves 150 clients.
2. **Get more from the same inputs.** Oru adopts better accounting software, and each bookkeeper can now handle 40 clients. Same 4 people, 160 clients.

The first is **extensive growth**: getting bigger. The second is **intensive growth**: getting better. The second is what economists call higher **productivity**.

Economists usually write the inputs as labor and capital (where capital means tools and machines, not money), with productivity multiplying them:

> Output = Productivity × f(Capital, Labor)

Productivity is the recipe; labor and capital are the ingredients. The distinction matters because ingredients hit diminishing returns. The tenth bookkeeper in a firm with three clients' worth of referrals adds nothing. A better recipe has no such ceiling. That's why long-run living standards rise mostly through productivity, not through piling up more workers and machines.

Which number you look at depends on the question:

| Measure | For Oru's firm | What it tells you |
| --- | --- | --- |
| Total output | Total revenue | Size and power |
| Output per person | Revenue per bookkeeper | How well people are paid, eventually |
| Output per input | Clients per bookkeeper, per dollar of software | Real progress |

The same three measures apply to a country. A country can grow total GDP just by adding people, without anyone getting richer. Per-person and per-input growth are where living standards come from.

One thing I found striking: productivity is measured as a leftover. Economists estimate how much growth more labor and capital *should* explain, and call whatever's left productivity. Moses Abramovitz famously called it a measure of our ignorance. Historically, that leftover explains most of long-run growth.

---

## Where Money Comes From

**Money is a claim on real wealth, not wealth itself.** If everyone suddenly had twice as much money and nothing else changed, prices would roughly double and nobody would be richer.

What surprised me most is where money comes from. When Oru took her $60,000 loan, the bank didn't hand her someone else's savings. It added $60,000 to her account. No other depositor's balance went down. New money now existed.

| | Oru | Bank |
| --- | --- | --- |
| New asset | $60,000 deposit | $60,000 loan |
| New liability | $60,000 loan | $60,000 deposit owed to Oru |
| Change in net worth | 0 | 0 |

Nobody got richer on paper. But Oru now had spending power. She bought furniture and computers, which became income for the people who sold them, who spent some of it, and so on. **One person's spending is another person's income.** That loop is why lending matters so much to the economy even though it creates no wealth by itself.

When Oru repays, she pays from her deposit. Her balance drops and the loan drops by the same amount, and that money stops existing. So money expands when lending grows and contracts when loans are repaid. The central bank steers this mainly through the interest rate: cheaper borrowing means more loans, more money and more spending.

---

## Where AI Enters

Now give every bookkeeper an AI system that does most of the routine work. Here's the framework above applied to it. I don't have answers yet. These are the questions the definitions force.

**Is AI capital or labor?** It's capital: a tool someone owns. But it's the first capital that does cognitive work we used to buy only from people. That blurs the line the whole growth formula is built on.

**Extensive or intensive growth?** If each bookkeeper can now handle 200 clients, that's productivity growth on a scale no software upgrade ever delivered. But Oru might instead keep 100 clients and need one bookkeeper. Same technology, very different outcome for the people involved.

**Who captures the value?** The $96,000 gets split differently. Competition might push prices down, so clients capture more. Oru might keep fees high and capture more profit. The AI provider captures a share through what it charges. And the bookkeepers lose bargaining power, because they've become easier to replace.

**What happens to human capital?** Tav's bookkeeping skill hasn't gone anywhere. He knows exactly what he knew. But a skill is worth only what the market will pay for it, and that price can collapse even while the skill stays intact. This is the mechanism by which AI could hit labor: not by destroying skills, but by making them cheap.

**What's the opportunity cost of displaced workers?** If AI frees up three bookkeepers, society gains only if they move to something productive. If they end up stuck, that's misallocation on a large scale.

**Will GDP even see it?** If AI makes bookkeeping almost free, much of the gain shows up as consumer surplus: clients get a $1,000 service for $50. Real value, mostly invisible in the numbers people use to judge whether the economy is growing.

Each of these needs more machinery than I have yet. The next piece I'm working on is discounting: why a dollar tomorrow is worth less than a dollar today. It turns out to be the idea behind interest rates, bond prices, how companies and land get valued, and how much a skill like Tav's is worth over a career. After that come inflation, central banks, and eventually the question I started with.

Once those pieces are in place, the goal is to find where AI breaks the assumptions this framework rests on, and where that leaves gaps and opportunities.
