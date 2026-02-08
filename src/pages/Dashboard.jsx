import styles from './Dashboard.module.css'

export default function Dashboard() {
  return (
    <div className={styles.page}>
      <div className="stagger-fade">
        <section className={styles.mlSection}>
          <div className={styles.bento}>
          {/* Story Card - spans rows 1-2, column 1 */}
          <article className={styles.storyCard}>
            <h3>Predicting Air Quality: From Correlation to Machine Learning</h3>
            <p>We built two machine learning models to predict the number of unhealthy air quality days for counties in the next year.</p>
            <div className={styles.separator} aria-hidden />
            <h4 className={styles.sectionHeader}>Step 1: Correlation Analysis</h4>
            <p>Calculated correlation matrix for all 15 numeric features to identify features most correlated with "Unhealthy Days" while checking for multicollinearity (features too similar to each other).</p>
            <h4 className={styles.sectionHeader}>Step 2: Data Preparation</h4>
            <p><strong>5,902 county-year observations</strong> (2020-2025) with the following split:</p>
            <ul>
              <li>70% Training Data: 4,131 observations</li>
              <li>30% Test Data: 1,771 observations</li>
              <li>Excluded outliers, duplicates & N/A values</li>
            </ul>
            <h4 className={styles.sectionHeader}>Step 3: Linear Regression Baseline</h4>
            <p>Simple, interpretable model achieving <span className={styles.highlight}>R² 55%</span> and <span className={styles.highlight}>MAE ±1.05 days</span>. The model captures moderate patterns from correlation but is limited by linearity—unable to capture complex interactions between features.</p>
            <h4 className={styles.sectionHeader}>Step 4: Random Forest Advancement</h4>
            <p>Ensemble of 300 decision trees achieving <span className={styles.highlight}>R² 90%</span> and <span className={styles.highlight}>MAE ±0.29 days</span>. Each tree learns from random feature subsets, with the final prediction being the average of all trees. This approach captures non-linear relationships and complex feature interactions that correlation analysis revealed.</p>
          </article>

          {/* Correlation Matrix Card - column 2, row 1 */}
          <article className={styles.correlationCard}>
            <h3>Correlation Matrix</h3>
            <img src="/correlation-matrix.png" alt="Correlation matrix" className={styles.cardImage} />
          </article>

          {/* Model Performance Card - column 2, row 2 */}
          <article className={styles.performanceCard}>
            <h3>Model Performance</h3>
            <div className={styles.modelComparison}>
              <div className={styles.modelBox}>
                <h4>Linear Regression</h4>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>R² Score</span>
                  <span className={styles.statValue}>55%</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>MAE</span>
                  <span className={styles.statValue}>±1.05 days</span>
                </div>
                <div className={styles.modelNote}>Simple baseline model</div>
              </div>
              <div className={styles.modelBox}>
                <h4>Random Forest</h4>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>R² Score</span>
                  <span className={styles.statValue}>90%</span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>MAE</span>
                  <span className={styles.statValue}>±0.29 days</span>
                </div>
                <div className={styles.modelNote}>74% error reduction</div>
              </div>
            </div>
          </article>

          {/* Model Comparison Plots Card - full width, row 3 */}
          <article className={styles.plotsCard}>
            <h3>Model Comparison Plots</h3>
            <img src="/model-comparison.png" alt="Model comparison plots" className={styles.cardImage} />
          </article>

          {/* Impact Card - full width, row 4 */}
          <article className={styles.impactCard}>
            <h3>The Value of Our Predictive Model</h3>
            <p>Our Random Forest model, achieving 90% accuracy in predicting unhealthy air quality days, enables proactive public health responses:</p>
            <ul>
              <li><strong>Proactive Alerts:</strong> Counties predicted to have &gt;10 unhealthy days can issue advance health warnings to vulnerable populations (children, elderly, asthma patients)</li>
              <li><strong>Healthcare Resource Allocation:</strong> Hospitals can stock inhalers, prepare respiratory units, and schedule additional staff based on predicted unhealthy days</li>
              <li><strong>Resource Distribution:</strong> Limited public health budgets can be allocated to counties with highest predicted risk, not just highest population</li>
            </ul>
            <div className={styles.separator} aria-hidden />
            <p><strong>Result:</strong> Data-driven predictions accurate within ±0.3 days, enabling proactive public health responses. The correlation analysis was essential—it guided feature selection, revealed non-linearity, and validated our Random Forest's feature importance rankings.</p>
          </article>
          </div>
        </section>
      </div>
    </div>
  )
}
