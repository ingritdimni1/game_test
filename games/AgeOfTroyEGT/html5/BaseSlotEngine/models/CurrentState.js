function CurrentState(a){this.state=a.state;this.gameNumber=a.gameNumber;this.bet=a.bet;this.denomination=a.denomination;this.numberOfLines="undefined"!==typeof a.numberOfLines?a.numberOfLines:a.combos;this.reels=a.reels.slice();a.lines?this.lines=a.lines.slice():a.combos&&(this.lines=a.combos.slice());a.scatters&&(this.scatters=a.scatters.slice());a.expand&&(this.expand=a.expand.slice());this.winAmount=a.winAmount;this.gamblesUsed=a.gamblesUsed;this.gambleAttemptsLeft=a.gambles;this.previousGambles=
a.previousGambles.slice();this.freeSpins=a.freespins;this.freespinsUsed=a.freespinsUsed;a.freespinScatters&&(this.freespinScatters=a.freespinScatters.slice());a.freespinsPerLine&&(this.freeSpinsPerLine=a.freespinsPerLine.slice());this.firstSpin=a.firstSpin;this.jackpotGameState=a.jackpotGameState;this.jackpot=a.jackpot};