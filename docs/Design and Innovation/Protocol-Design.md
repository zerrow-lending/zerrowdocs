---
sidebar_position: 1
---

# Protocol Design

Zerrow is a new lending protocol with secure and isolated liquidity.
The protocol is inspired by the technical paper of Aave V3, and the protocol code is independently completed by the zerrow team. And some improvements have been made to the yield curve of the lending boundary situation.
Similar to Aave V3, when users deposit assets, they receive deposit coins and immediately begin to accrue interest; When lending assets, users receive loan coins and immediately begin to accrue interest.
Both types of tokens are non transferable. Assets are divided into two types, high liquidity assets and segregated assets. Among them, high liquidity assets have some currency groups that form homogeneous assets, such as 0g, staked 0g, etc.
Therefore, users can freely set the three modes they want to use when there is no deposit or loan: high liquidity mode, homogeneous mode, and isolated mode.
The initial settings of the account are in high liquidity mode, where you can use high liquidity assets as collateral to lend out any asset;
The homogeneous mode is designed to improve asset utilization while ensuring safety. Currently, there are two main groups of assets: Stablecoins (just like USDT, USDC) and 0g& derivatives (0g, staked 0g). When selecting this mode, you can only deposit or borrow assets from the selected group. However, your collateral ratio and other parameters will be significantly increased allowing you to maximize asset utilization.
The isolation mode is designed to use some long tail assets, such as currencies that are only circulating on the local chain. When selecting this mode, you can only deposit the high-risk asset variety you have chosen, and can only lend USDT, with a limit on the amount that the entire chain can lend.

The specific details of the loan design are as follows :
The protocol use ERC20 tokens without transfer methods as collateral and lending vouchers can be referred to as Deposit Coin and Loan Coin, respectively.
Each asset has the best deposit interest rate (not exceeding 90%). When the actual lending rate is lower than the best deposit interest rate(BDIR), the deposit and lending interest rates are lower and the interest margin is larger; When the actual lending rate is around the BDIR, the interest rate is moderate and maintains a low interest margin. When it is higher than the BDIR, the deposit and lending interest rates will significantly increase, and the interest margin will increase exponentially with the increase of utilization rate;
The expected optimal lending rate for mainstream borrowing currencies should be controlled at around 4% for lending rates and 6% for loan rates, depending on the specific parameters of the asset
The calculation scheme for loan interest is as follows:

Deposit interest rate:

![1](img/image1.avif "1")

lending interest rate:

![2](img/image2.avif "2")

**BLR** refers to the optimal lending ratio

**BDIR** refers to the annualized interest rate ratio at the optimal lending rate

**LR** is the current lending rate

**DIR** refers to the deposit interest rate

**LIR** stands for Loan Interest Rate

