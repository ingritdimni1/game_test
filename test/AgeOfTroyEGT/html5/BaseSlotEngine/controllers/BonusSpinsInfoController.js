ViewController("BonusSpinsInfoController",{BONUS_SPINS_START_MESSAGE_SHOWN:"bonusSpinsStartMessageShown",BONUS_SPINS_END_MESSAGE_SHOWN:"bonusSpinsEndMessageShown",BONUS_SPINS_START_MESSAGE_HIDDEN:"bonusSpinsStartMessageHidden",BONUS_SPINS_END_MESSAGE_HIDDEN:"bonusSpinsEndMessageHidden"},function(){function b(){this._hasBonusSpinsInfoBeenShown||!this._gameSettings.bonusSpinsModel.hasMoreBonusSpinsToPlay()||this._gameSettings.serverMessage.jackpot||this._gameSettings.serverMessage.state==BaseMessage.STATE_JACKPOT||
(this._hasBonusSpinsInfoBeenShown=!0,this._view.setBonusSpins(this._gameSettings.bonusSpinsModel.totalBonusSpins()),this._view.visible(!0),this.dispatchEvent(new Event(BonusSpinsInfoController.BONUS_SPINS_START_MESSAGE_SHOWN)))}function a(){var a="BonusSpinsEnd_"+this._gameSettings.bonusSpinsModel.statusCode+"PopUpTitle",b="BonusSpinsEnd_"+this._gameSettings.bonusSpinsModel.statusCode+"PopUpContent",c="BonusSpinsEnd_"+this._gameSettings.bonusSpinsModel.statusCode+"PopUpButtonText";this._gameSettings.bonusSpinsModel.addPendingWinAmount();
var d=this._gameSettings.currency?100:this._gameSettings.denominations[this._gameSettings.currDenominationIndex][0],e=this._gameSettings.currency&&!this._gameSettings.diamondPlay,f=e?" "+this._gameSettings.currencyType:"",d=Utils.formatNumber(this._gameSettings.bonusSpinsModel.totalWinAmount(),d,e,this._gameSettings.noCoins)+f;this._view.setEndMessage(this._gameSettings.localize(a),this._gameSettings.localize(b),this._gameSettings.localize(c),d);this._view.visible(!0);this.dispatchEvent(new Event(BonusSpinsInfoController.BONUS_SPINS_END_MESSAGE_SHOWN))}
function c(){console.log("CLICK");this._view.visible(!1);this._gameSettings.bonusSpinsModel.hasBonusGameEnded?this.dispatchEvent(new Event(BonusSpinsInfoController.BONUS_SPINS_END_MESSAGE_HIDDEN)):this.dispatchEvent(new Event(BonusSpinsInfoController.BONUS_SPINS_START_MESSAGE_HIDDEN))}return{init:function(){this._gameSettings=GameSettings.getInstance();this._hasBonusSpinsInfoBeenShown=!1;this._super();this._view=new BonusSpinsInfoView;this._view.visible(!1);this._view.popUpButton.addEventListener(MouseEvent.CLICK,
c,this)},checkInitialState:function(){this._gameSettings.bonusSpinsModel.hasMoreBonusSpinsToPlay()&&this._gameSettings.serverMessage.state==BaseMessage.STATE_IDLE&&b.call(this)},winCollected:function(c){c||this._gameSettings.freespinGame||(this._gameSettings.bonusSpinsModel.hasMoreBonusSpinsToPlay()?b.call(this):a.call(this))},gambleCompleted:function(){0==this._gameSettings.serverMessage.winAmount&&(this._gameSettings.bonusSpinsModel.hasMoreBonusSpinsToPlay()?b.call(this):a.call(this))},jackpotCompleted:function(){this._gameSettings.bonusSpinsModel.hasMoreBonusSpinsToPlay()?
b.call(this):a.call(this)},winMoneyCollectComplete:function(){this._gameSettings.bonusSpinsModel.hasMoreBonusSpinsToPlay()?b.call(this):a.call(this)},freespinOutroEnded:function(){this._gameSettings.bonusSpinsModel.hasMoreBonusSpinsToPlay()||this._gameSettings.serverMessage.state!=BaseMessage.STATE_IDLE||this._gameSettings.freespinGame?this._gameSettings.bonusSpinsModel.hasMoreBonusSpinsToPlay()&&this._gameSettings.serverMessage.state==BaseMessage.STATE_IDLE&&b.call(this):a.call(this)},winMoneyComplete:function(){this._gameSettings.bonusSpinsModel.hasMoreBonusSpinsToPlay()||
this._gameSettings.serverMessage.state!=BaseMessage.STATE_IDLE||this._gameSettings.freespinGame||a.call(this)},reelsStopped:function(){this._gameSettings.bonusSpinsModel.hasMoreBonusSpinsToPlay()||0!=SpinAnalyzer.getNumWins(this._gameSettings.serverMessage)||this._gameSettings.serverMessage.state!=BaseMessage.STATE_IDLE||this._gameSettings.freespinGame||a.call(this)},dispose:function(){this._view.popUpButton.removeEventListener(MouseEvent.CLICK,c,this);this._super()}}}());