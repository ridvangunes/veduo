import FinancePageHeader from "@/components/dashboards/instructor/finance/FinancePageHeader";
import FinanceStats from "@/components/dashboards/instructor/finance/FinanceStats";
import TransactionHistory from "@/components/dashboards/instructor/finance/TransactionHistory";

const FinancePage = () => {
  return (
    <div className="space-y-6">
      <FinancePageHeader />
      <FinanceStats />
      <TransactionHistory />
    </div>
  );
};

export default FinancePage;
