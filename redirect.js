// リダイレクトルールのマッピング（クエリパラメータを除いたベースURL）
const redirectMap = {
    "https://sendenkaigi-help.hp.peraichi.com": "https://www.sendenkaigi.com/info/contact",
    "https://info.sendenkaigi.com/bbl/preview2": "https://www.sendenkaigi.com/pickup/preview2/",
    "https://info.sendenkaigi.com/campaign_additional-ticket_a": "https://www.sendenkaigi.com/pickup/campaign_addittional-ticket_a",
    "https://info.sendenkaigi.com/campaign_manualize": "https://www.sendenkaigi.com/pickup/campaign_manualize",
    "https://info.sendenkaigi.com/campaign_0331_one-time-only_service": "https://www.sendenkaigi.com/pickup/campaign_0331_one-time-only_service",
    "https://info.sendenkaigi.com/bbl_buy1get1free": "https://www.sendenkaigi.com/pickup/bbl_buy1get1free",
    "https://info.sendenkaigi.com/campaign_buy1-get1-free_0331": "https://www.sendenkaigi.com/pickup/campaign_buy1-get1-free_0331",
    "https://info.sendenkaigi.com/campaign_28days_20241031": "https://www.sendenkaigi.com/pickup/campaign_28days_20241031",
    "https://info.sendenkaigi.com/cl_buy1get1free": "https://www.sendenkaigi.com/pickup/cl_buy1get1free",
    "https://info.sendenkaigi.com/pr.training": "https://www.sendenkaigi.com/pickup/pr_training",
    "https://info-senden.hp.peraichi.com/ai": "https://www.sendenkaigi.com/pickup/ai",
    "https://info.sendenkaigi.com/btob.training": "https://www.sendenkaigi.com/pickup/btob_training"
};

// 現在のURLを取得し、クエリパラメータ（?以降）を除外
const currentUrl = window.location.origin + window.location.pathname;

// クエリパラメータを除いたURLがリダイレクト対象に含まれている場合、コンソールに出力
if (redirectMap[currentUrl]) {
    console.log(`🔄 リダイレクト対象URL: ${currentUrl} → ${redirectMap[currentUrl]}`);
    
    // 実際のリダイレクト処理はコメントアウト
    // window.location.replace(redirectMap[currentUrl]); // 301相当のリダイレクト
}