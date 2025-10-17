---
sidebar_position: 4
---

# Fees and Yield


## Spread Fees
zerrow takes a 10% interest rate spread fee on $USDC, $USDT and $0g, and a 12% interest rate spread fee for every other asset.
An interest rate spread fee is the difference between the borrowing and lending rates that the protocol charges. Meaning if you were borrowing $USDC at 10% APY and lenders are receiving 8% APY, marginfi would take 10% of that 2% spread as the fee.

## Lending Yield

zerrow allows users to deposit supported tokens into the protocol and earn yield on them. This is made possible by lenders on the platform who borrow these tokens and pay interest on them.

The deposit yield on zerrow is typically expressed in terms of APY (Annual Percentage Yield). Yield farming has become increasingly popular in DeFi, and zerrow is one of the lending protocols that allows users to earn yield on their deposited assets.

The APYs for lending each asset are typically exposed in zerrow web interfaces, and can be found in protocol configuration.

## Borrow Fees
Borrowing on zerrow incurs a fee. Fees are denominated in each asset that zerrow supports, and usually expressed in terms of APY (Annual Percentage Yield).

The rate is dictated by bank-specific parameters, and partially variable according to the bank's utilization rate. Parameters can be found in protocol configuration accounts (banks), and live rates are exposed through the zerrow web app.

## Liquidation Fees
When borrowed trader positions fall below configured margin requirements, they are exposed to liquidation. Liquidations on marginfi are automatic and permissionless.

Liquidations are executed by third-party liquidators who provide this service for a return, and zerrow awards a fee for successful liquidations.

When borrowed positions fall below requirements and are liquidated, liquidated borrowers (a.k.a. liquidatees) are penalized through a liquidation fee. This fee amounts to 5% of the liquidated assets, and is distributed to the liquidator.

