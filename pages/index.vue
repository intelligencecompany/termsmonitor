<template>
  <div>
      <v-row class="hero">
        <v-col cols="12" md="6" class="hero-left">
          <h1 class="text-h2 font-weight-black text-secondary">Stay Compliant with Real-Time Terms Monitoring</h1>
          <p class="my-4 text-h5 font-weight-medium">Effortlessly track changes in terms and conditions, privacy policies, and user agreements.</p>
          <div class="benefits">
            <v-chip color="primary" outlined>Automated Crawling & Detection</v-chip>
            <v-chip color="primary" outlined>Version Tracking and Change Detection</v-chip>
            <v-chip color="primary" outlined>User-Friendly Dashboard</v-chip>
            <v-chip color="primary" outlined>Legal Risk Evaluation</v-chip>
            <v-chip color="primary" outlined>Customizable Alerts</v-chip>
          </div>
          <div class="cta-buttons">
            <v-btn color="primary" size="large" to="/signup">Try for Free</v-btn>
            <v-btn variant="outlined" color="primary" size="large" to="/product">Learn More</v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="hero-right">
            <v-responsive class="text-center">
              <img src="/assets/speedometer.svg" alt="Speedometer Monitor" class="speedometer w-50" />
            </v-responsive>
        </v-col>
      </v-row>

      <v-row>
        <v-col offset="1" cols="10" class="text-center my-12" align-self="center">
            <h2 class="text-h3 font-weight-bold text-uppercase text-info font-italic">"Take Control of Your Software Terms. Stay Informed, Stay Compliant!"</h2>
        </v-col>
      </v-row>


    <section class="features">
      <v-row >
        <v-col cols="12">
          <h2 class="text-secondary text-h3 font-weight-black">Key Features</h2>
        </v-col>
        <v-col cols="12" md="4" class="feature-card">
            <v-btn elevation="4" color="primarylight text-secondary" class="feature-number" icon>1</v-btn>
          <v-card class="pa-4 fixed-height" elevation="4">
            <v-card-title class="d-flex flex-column align-items-center">
              <v-btn icon size="large"  color="secondary" class="mb-4">
                <v-icon large>mdi-magnify</v-icon>
              </v-btn>
              Automated Crawling & Detection
            </v-card-title>
            <v-card-text class="mt-4">The tool can periodically crawl the websites of SaaS providers to detect if there’s been an update to the terms, privacy policies, or user agreements.</v-card-text>

          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="feature-card">
            <v-btn elevation="4" color="primarylight text-secondary" class="feature-number" icon>2</v-btn>
            <v-card class="pa-4 fixed-height" elevation="4">
                <v-card-title class="d-flex flex-column align-items-center">
                <v-btn icon size="large" color="secondary" class="mb-4">
                    <v-icon large>mdi-chart-bar</v-icon>
                </v-btn>
                Version Tracking and Change Detection
                </v-card-title>
                <v-card-text class="mt-4">The tool would track all versions of T&Cs, comparing the old and new versions and highlighting any changes. This could include text changes, additions, or deletions.</v-card-text>

            </v-card>
        </v-col>
        <v-col cols="12" md="4" class="feature-card">
            <v-btn elevation="4" color="primarylight text-secondary" class="feature-number" icon>3</v-btn>
            <v-card class="pa-4 fixed-height" elevation="4">
                <v-card-title class="d-flex flex-column align-items-center">
                <v-btn icon size="large" color="secondary" class="mb-4">
                    <v-icon large>mdi-view-dashboard</v-icon>
                </v-btn>
                User-Friendly Dashboard
                </v-card-title>
                <v-card-text class="mt-4">A dashboard to display notifications, changes, and updates at a glance. A SaaS business could quickly see which of their services has updated its terms, the frequency of updates, and the impact of these changes.</v-card-text>
                
            </v-card>
        </v-col>
        <v-col cols="12" md="4" class="feature-card">
            <v-btn elevation="4" color="primarylight text-secondary" class="feature-number" icon>4</v-btn>
          <v-card class="pa-4 fixed-height" elevation="4">
            <v-card-title class="d-flex flex-column align-items-center">
              <v-btn icon size="large"  color="secondary" class="mb-4">
                <v-icon large>mdi-shield-check</v-icon>
              </v-btn>
              Legal Risk Evaluation
            </v-card-title>
            <v-card-text class="mt-4">A built-in tool that evaluates changes in terms and flags possible legal risks, such as clauses that may affect data handling or introduce new liabilities for the business or its users.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="feature-card">
            <v-btn elevation="4" color="primarylight text-secondary" class="feature-number" icon>5</v-btn>
          <v-card class="pa-4 fixed-height" elevation="4">
            <v-card-title class="d-flex flex-column align-items-center">
              <v-btn icon size="large"  color="secondary" class="mb-4">
                <v-icon large>mdi-bell</v-icon>
              </v-btn>
              Notification System
            </v-card-title>
            <v-card-text class="mt-4">Customizable alerts that can be sent via email or Slack when a new update happens. Businesses could choose the level of urgency for different types of changes.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="feature-card">
            <v-btn elevation="4" color="primarylight text-secondary" class="feature-number" icon>6</v-btn>
          <v-card class="pa-4 fixed-height" elevation="4">
            <v-card-title class="d-flex flex-column align-items-center">
              <v-btn icon size="large"  color="secondary" class="mb-4">
                <v-icon large>mdi-brain</v-icon>
              </v-btn>
              AI Powered Analysis
            </v-card-title>
            <v-card-text class="mt-4">Leverage AI to analyze terms and conditions, providing insights and identifying potential risks automatically.</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    
    <section class="getstarted">
        <v-row class="my-12 text-center">
            <v-col cols="12">
                <section>
                    <h2 class="text-secondary text-h3 font-weight-black mb-4">Get Started</h2>
                    <p class="font-weight-light text-h5">Sign up today to start monitoring terms and conditions effortlessly.</p>
                    <v-btn to="/signup" class="bg-primary my-6" rounded size="x-large">Sign Up Today</v-btn>
                </section>
            </v-col>
        </v-row>
    </section>


    <section class="benefits">
      <v-row>
        <v-col cols="12">
          <h2 class="text-secondary text-h3 font-weight-black">Your Benefits</h2>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-4" elevation="4">
            <v-card-title>Legal Compliance</v-card-title>
            <v-card-text>Ensures that organizations stay compliant with ever-changing regulations and avoid legal issues.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-4" elevation="4">
            <v-card-title>Operational Efficiency</v-card-title>
            <v-card-text>Reduces manual monitoring time for updates, helping businesses save time and resources.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-4" elevation="4">
            <v-card-title>Risk Management</v-card-title>
            <v-card-text>Identifies critical changes in terms that may introduce risks, allowing businesses to adjust operations or inform users accordingly.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-4" elevation="4">
            <v-card-title>Transparency</v-card-title>
            <v-card-text>Provides better visibility of the T&Cs across various services, helping organizations make informed decisions.</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section class="product-showcase d-none">
      <v-row>
        <v-col cols="12">
          <h2>Product Showcase</h2>
        </v-col>
        <v-col cols="12" class="product-images">
          <!-- SVG interface wireframes and animations go here -->
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
.landing-page {
  text-align: center;
  padding: 2rem;
  background: #ffffff;
  color: #000;
}


.category-pill {
  margin-bottom: 1rem;
}


.cta-buttons {
  display: flex;
  justify-content: left;
  gap: 1rem;
  margin-top: 2rem;
}



.fixed-height {
  height: 350px;
}


.feature-number {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.benefits {
  text-align: left;
  margin: 1rem 0;
  padding-left: 1rem;
  list-style-type: disc;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
