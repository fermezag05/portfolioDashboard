from services.market_data import get_price_history
from services.metrics import calculate_metrics
from fastapi import APIRouter

router = APIRouter()


@router.get("/stock/{ticker}")
def get_stock(ticker: str, period: str = '1y'):
    prices = get_price_history(ticker, period)
    metrics = calculate_metrics(prices)
    return {
        "prices": prices,
        "metrics": metrics
    }
