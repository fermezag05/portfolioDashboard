import yfinance as yf
import pandas as pd

ticker = input()
dat = yf.Ticker(ticker)

data = dat.history(period='1y')

closing_prices = data['Close']


prices = []

for dates, price in closing_prices.items():
    # print(dates, price)
    prices.append({"date": str(dates.date()), "price": price})

print(prices)
