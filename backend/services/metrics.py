import numpy as np
import services.market_data as md


def calculate_total_return(prices: list):

    first_price = prices[0]["price"]
    last_price = prices[-1]["price"]

    return ((last_price - first_price)/(first_price))*100


def calculate_annualized_volatility(prices: list):
    prices_arr = np.array([p["price"] for p in prices])
    log_returns = np.diff(np.log(prices_arr))
    standard_deviation = np.std(log_returns)
    return (standard_deviation * np.sqrt(252))


def calculate_sharpe(prices: list):
    prices_arr = np.array([p["price"] for p in prices])
    log_returns = np.diff(np.log(prices_arr))
    expected_annualized_return = np.mean(log_returns) * 252
    standard_deviation = np.std(log_returns)
    return ((expected_annualized_return - 0.05) / calculate_annualized_volatility(prices))


def calculate_metrics(prices: list):
    return {
        "total_return": round(calculate_total_return(prices), 2),
        "volatility": round(calculate_annualized_volatility(prices)*100, 2),
        "sharpe": round(calculate_sharpe(prices), 2)
    }

# Test for calculate_total_revenue
# print(calculate_total_return(md.get_price_history('AAPL', '1y')))

# Test for calculate_annualized_volatility
# print(calculate_annualized_volatility(md.get_price_history('AAPL', '1y')))

# Test for calculate_sharpe
# print(calculate_sharpe(md.get_price_history('AAPL', '1y')))
