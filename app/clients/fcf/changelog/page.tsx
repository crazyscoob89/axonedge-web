import ChangelogPage, { ChangelogEntry } from "@/components/ChangelogPage";

const entries: ChangelogEntry[] = [
  {
    date: "April 17, 2026",
    title: "Changelog Page Launched",
    type: "New Feature",
    summary: "You now have a live changelog page so you can always see exactly what was built, updated, or changed — without having to ask.",
    items: [
      "Changelog published at axonedge.tech/clients/fcf/changelog",
      "All past updates back-filled from project kickoff",
      "Updated automatically whenever something changes",
    ],
  },
  {
    date: "April 11, 2026",
    title: "GO LIVE — Pocket Docket is Live ✅",
    type: "Launch",
    summary: "Your first live Pocket Docket call ran successfully on April 11 at 10 AM CST. All systems go.",
    items: [
      "Member portal live at community.firstcallfriday.com",
      "Live call link active at live.firstcallfriday.com",
      "All 27 reminder campaigns firing (email + SMS, 3-touchpoint sequence)",
      "All calls scheduled April–December 2026 with full automation",
      "Bootcamp course live for all members",
      "Resources course live for all members",
      "4 training tracks delivered for your admin use",
    ],
    clientNote: "Your platform runs itself. Members are automatically reminded before every call. No manual work required from you.",
  },
  {
    date: "April 7, 2026",
    title: "Post-Walkthrough Changes Applied",
    type: "Update",
    summary: "All change requests from your April 6 admin review have been completed.",
    items: [
      "Portal content adjustments applied per your feedback",
      "GHL campaign tweaks completed",
      "Final pre-launch polish done",
    ],
    clientNote: "Everything you flagged during the walkthrough is resolved. System was clean for go-live.",
  },
  {
    date: "April 6, 2026",
    title: "Admin Walkthrough Completed",
    type: "Milestone",
    summary: "Full platform walkthrough completed with you. You reviewed every system before go-live.",
    items: [
      "GHL admin panel walkthrough",
      "Member portal navigation and content review",
      "Reminder campaign mechanics explained",
      "Training materials reviewed",
    ],
    clientNote: "You can manage the platform independently. AxonEdge is here for updates and improvements, not day-to-day operations.",
  },
  {
    date: "March 23, 2026",
    title: "Full Build Delivered — All Contract Deliverables Complete",
    type: "Milestone",
    summary: "Every deliverable in the contract was completed and submitted for review.",
    items: [
      "Pocket Docket Live — member-facing product ($1,200/6mo)",
      "Pocket Docket On-Demand — booster tier ($2,000/6mo)",
      "27 automated reminder campaigns built (April–December 2026)",
      "Bootcamp course + Resources course on Skool portal",
      "4 training guides: platform orientation, admin, quick reference, Loom scripts",
    ],
    clientNote: "Your platform was built to run without ongoing technical support. Everything is documented and yours.",
  },
  {
    date: "March 1, 2026",
    title: "Project Kickoff",
    type: "Milestone",
    summary: "AxonEdge and First Call Friday officially started the engagement.",
    items: [
      "GHL automation build scoped",
      "Member portal setup (Skool) scoped",
      "Reminder campaigns for all 2026 calls confirmed",
      "Training content for admin and members confirmed",
    ],
    clientNote: "Your coaching community was getting a fully automated, professional system — built once, runs permanently.",
  },
];

export default function FCFChangelogPage() {
  return (
    <ChangelogPage
      clientName="First Call Friday"
      projectName="Pocket Docket — Project Updates"
      entries={entries}
    />
  );
}
