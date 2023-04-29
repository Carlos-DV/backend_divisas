export const queryDB = {
    getTipoCambioBySucursal:"SELECT * FROM [ORTT] WHERE [Currency]='USD' AND RateDate BETWEEN @date_begin AND @date_finish",
    getCurrent:"SELECT * FROM [ORTT] WHERE [Currency]='USD' AND RateDate=@dateCurrency",
    updateTipoCambioBySucursal: "UPDATE [ORTT] SET Rate=@currentCoin WHERE [Currency]='USD' AND RateDate = @dateCurrency"
}