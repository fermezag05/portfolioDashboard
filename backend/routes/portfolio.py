from services.market_data import get_price_history
from fastapi import APIRouter

router = APIRouter()


@router.get("/stock/{ticker}")
def get_stock(ticker: str, period: str):
    prices = get_price_history(ticker, period)
    return prices
