"use client";

import { useEffect, useRef } from "react";

const BOARD_ROWS = [
  { dot: "#22c55e", label: "Inventory Alert",           detail: "Reorder triggered for Steel Sheet 4x8",      time: "2m ago"  },
  { dot: "#f59e0b", label: "Job Cost Anomaly",           detail: "$4,200 variance flagged on Project #1047",   time: "5m ago"  },
  { dot: "#22c55e", label: "Dashboard Updated",          detail: "847 new data points synced",                 time: "8m ago"  },
  { dot: "#22c55e", label: "AI Quote Generated",         detail: "Response time: 1.4s",                        time: "11m ago" },
  { dot: "#22c55e", label: "Margin Report Ready",        detail: "Q1 summary delivered to team",               time: "15m ago" },
  { dot: "#22c55e", label: "Scheduling Conflict",        detail: "Auto-resolved - crew reassigned",            time: "19m ago" },
  { dot: "#f59e0b", label: "Billing Leakage Detected",   detail: "3 unbilled hours on Matter #882",            time: "23m ago" },
  { dot: "#22c55e", label: "Supply Order Triggered",     detail: "Roofing materials reordered automatically",  time: "28m ago" },
  { dot: "#22c55e", label: "Patient Follow-up Sent",     detail: "12 reminders dispatched",                    time: "34m ago" },
  { dot: "#f59e0b", label: "Revenue Cycle Alert",        detail: "4 claims pending over 30 days",              time: "40m ago" },
  { dot: "#22c55e", label: "Freight Delay Flagged",      detail: "Shipment #4421 rerouted successfully",       time: "47m ago" },
  { dot: "#22c55e", label: "Weekly Intelligence Digest", detail: "Delivered to team",                          time: "1h ago"  },
  { dot: "#f59e0b", label: "Overtime Alert",             detail: "Crew hours exceeded threshold on Job #14",   time: "1h ago"  },
  { dot: "#22c55e", label: "New Quote Request",          detail: "AI response in 1.2s",                        time: "1h ago"  },
  { dot: "#22c55e", label: "Anomaly Cleared",            detail: "False positive resolved automatically",      time: "2h ago"  },
  { dot: "#22c55e", label: "Dashboard Sync",             detail: "Connected 6 data sources",                   time: "2h ago"  },
  { dot: "#f59e0b", label: "Cost Overrun Warning",       detail: "Job #338 at 94% of budget",                  time: "2h ago"  },
  { dot: "#22c55e", label: "Compliance Check",           detail: "All records current, no action needed",      time: "3h ago"  },
  { dot: "#f59e0b", label: "Inventory Shrinkage",        detail: "Cycle count variance detected, SKU 2284",    time: "3h ago"  },
  { dot: "#22c55e", label: "Payroll Audit Complete",     detail: "No discrepancies found, 47 employees",       time: "3h ago"  },
  { dot: "#f59e0b", label: "Vendor Price Spike",         detail: "Steel tubing up 8.3%, alternate sourced",    time: "4h ago"  },
  { dot: "#22c55e", label: "Proposal Approved",          detail: "Client #612 signed $84K SOW",                time: "4h ago"  },
  { dot: "#22c55e", label: "Cash Flow Forecast",         detail: "Next 30 days: +$142K projected",             time: "4h ago"  },
  { dot: "#f59e0b", label: "AR Aging Alert",             detail: "6 invoices past 60 days, $32K total",        time: "5h ago"  },
  { dot: "#22c55e", label: "Equipment Utilization",      detail: "CNC #2 hit 92% efficiency this week",        time: "5h ago"  },
  { dot: "#22c55e", label: "Safety Incident Logged",     detail: "OSHA-compliant report filed automatically",  time: "5h ago"  },
  { dot: "#f59e0b", label: "Contract Renewal Due",       detail: "3 agreements expiring in 30 days",           time: "6h ago"  },
  { dot: "#22c55e", label: "Training Completed",         detail: "8 crew members certified, records updated",  time: "6h ago"  },
  { dot: "#22c55e", label: "Fleet Fuel Report",          detail: "12% cost reduction vs last quarter",         time: "7h ago"  },
  { dot: "#f59e0b", label: "Duplicate Entry Caught",     detail: "Invoice #9084 flagged before posting",       time: "7h ago"  },
  { dot: "#22c55e", label: "Customer Churn Signal",      detail: "3 accounts flagged for outreach",            time: "8h ago"  },
  { dot: "#22c55e", label: "Tax Document Package",       detail: "Q1 filings compiled and ready for CPA",      time: "9h ago"  },
  { dot: "#22c55e", label: "Permit Status Update",       detail: "Building permit #B-2284 approved",           time: "10h ago" },
  { dot: "#f59e0b", label: "Lead Scoring Alert",         detail: "5 hot prospects need follow-up today",       time: "11h ago" },
  { dot: "#22c55e", label: "Backup Verified",            detail: "Daily snapshot complete, 4.2TB secured",     time: "12h ago" },
];

const ROW_H = 38;
const LOOP_HEIGHT = BOARD_ROWS.length * ROW_H; // 1330px

export default function OpsScrollFeed() {
  const innerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const tick = () => {
      if (!pausedRef.current) {
        offsetRef.current = (offsetRef.current + 0.4) % LOOP_HEIGHT;
        el.style.marginTop = `-${offsetRef.current}px`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const rows = [...BOARD_ROWS, ...BOARD_ROWS];

  return (
    <div
      style={{ height: "266px", overflow: "hidden" }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div ref={innerRef} className="divide-y divide-white/[0.04]">
        {rows.map((row, i) => (
          <div
            key={i}
            style={{ height: `${ROW_H}px` }}
            className="grid grid-cols-[8px_1fr_auto] gap-3 px-4 items-center"
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: row.dot, boxShadow: `0 0 6px ${row.dot}88` }}
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-white text-xs font-semibold whitespace-nowrap">{row.label}</span>
                <span className="text-[#4b5563] text-xs">|</span>
                <span className="text-[#6b7280] text-xs truncate">{row.detail}</span>
              </div>
            </div>
            <span className="text-[#374151] text-[10px] font-mono whitespace-nowrap">{row.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
