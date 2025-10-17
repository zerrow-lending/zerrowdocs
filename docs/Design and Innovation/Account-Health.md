---
sidebar_position: 2
---

# Account Health

Easily track the risk level of your borrow positions.

Every account's health is represented as a health factor. Your account health factor is a single value that encapsulates how well-collateralized your portfolio is - or, how healthy it is.

Account health is calculated with the following formula:
![1](img/image.avif "1")
**LTV** is Loan-To-Value.

Liquidation Threshold is a parameter determined by zerrow Governance for each collateral asset, which is the maximum percentage of value that can be borrowed against a collateral asset. A health factor below 1 represents a borrow position that is eligible for liquidation.
For example, if you supply $10,000 in 0g with an 80% LTV and borrow $5,000 in USDT, your health factor = 10000 * 0.8 / 5000 = 1.6.
