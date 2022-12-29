let monthlyTog = document.querySelector("#monthly-tog")
      let quarterlyTog = document.querySelector("#quarterly-tog")
      let annualTog = document.querySelector("#annual-tog")
      let basicPriceDisplay = document.querySelector(".basic-price-display")
      let creatorPriceDisplay = document.querySelector(".creator-price-display")
      let aaPriceDisplay = document.querySelector(".aa-price-display")
        
      monthlyTog.addEventListener("click", function() {
          basicPriceDisplay.textContent = "$50/month"
          creatorPriceDisplay.textContent = "$60/month"
          aaPriceDisplay.textContent = "$70/month"
      })
      
      quarterlyTog.addEventListener("click", function() {
          basicPriceDisplay.textContent = "$100/quarter"
          creatorPriceDisplay.textContent = "$120/quarter"
          aaPriceDisplay.textContent = "$140/quarter"
          console.log("clicked")
      })
      
      annualTog.addEventListener("click", function() {
          basicPriceDisplay.textContent = "$300/year"
          creatorPriceDisplay.textContent = "$400/year"
          aaPriceDisplay.textContent = "$500/year"
      })
      
      let basicMembershipName = document.querySelector(".basic-membership-name")
      let creatorMembershipName = document.querySelector(".creator-membership-name")
      let aaMembershipName = document.querySelector(".aa-membership-name")
      
      function mediaQuery(mobileView) {
        if (mobileView.matches) {
            basicMembershipName.textContent="Basic(tap for more info)"
            creatorMembershipName.textContent="Creator (tap for more info)"
            aaMembershipName.textContent="All-Inclusive (tap for more info)"
        } 
        }
        
      let mobileView = window.matchMedia("(max-width:760px)")
      mediaQuery(mobileView)