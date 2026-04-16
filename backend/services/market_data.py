import yfinance as yf


def get_price_history(ticker, period):

    dat = yf.Ticker(ticker)

    data = dat.history(period=period)

    if data.empty:
        return None
    else:
        closing_prices = data['Close']

        prices = []

        for dates, price in closing_prices.items():
            prices.append({"date": str(dates.date()), "price": price})

        return prices


# print(get_price_history(input(), input()))
