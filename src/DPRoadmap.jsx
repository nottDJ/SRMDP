import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Phase 1 — Feel the Pattern",
    subtitle: "Understand overlapping subproblems & memoization",
    color: "#4ade80",
    bg: "#052e16",
    steps: [
      "Draw the recursion tree by hand",
      "Spot repeated subproblems",
      "Add a memo table (top-down)",
      "Convert to bottom-up (tabulation)",
    ],
    problems: [
      {
        name: "Fibonacci Number",
        tag: "Classic",
        why: "Purest intro to overlapping subproblems. You can see the tree explode without memo.",
        recurrence: "F(n) = F(n-1) + F(n-2)",
        link: "https://leetcode.com/problems/fibonacci-number/",
      },
      {
        name: "Climbing Stairs",
        tag: "Classic",
        why: "Fibonacci in disguise. Builds the habit of defining state = position.",
        recurrence: "dp[i] = dp[i-1] + dp[i-2]",
        link: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        name: "Min Cost Climbing Stairs",
        tag: "Easy",
        why: "First time you add a cost dimension. Choose min of two paths.",
        recurrence: "dp[i] = cost[i] + min(dp[i-1], dp[i-2])",
        link: "https://leetcode.com/problems/min-cost-climbing-stairs/",
      },
      {
        name: "Tribonacci Number",
        tag: "Easy",
        why: "3-state recurrence. Solidifies the pattern before moving on.",
        recurrence: "T(n) = T(n-1) + T(n-2) + T(n-3)",
        link: "https://leetcode.com/problems/n-th-tribonacci-number/",
      },
    ],
  },
  {
    id: 2,
    title: "Phase 2 — 1D Arrays",
    subtitle: "State = index. Decision at each position.",
    color: "#60a5fa",
    bg: "#0c1a2e",
    steps: [
      "Define dp[i] clearly in English first",
      "Think: what choices exist at index i?",
      "Write base cases (dp[0], dp[1])",
      "Fill left → right",
    ],
    problems: [
      {
        name: "House Robber",
        tag: "Medium",
        why: "Classic skip-or-take. dp[i] = max money up to house i.",
        recurrence: "dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        name: "House Robber II",
        tag: "Medium",
        why: "Circular constraint. Solve twice: [0..n-2] and [1..n-1], take max.",
        recurrence: "Run House Robber on two subarrays",
        link: "https://leetcode.com/problems/house-robber-ii/",
      },
      {
        name: "Maximum Subarray (Kadane's)",
        tag: "Medium",
        why: "dp[i] = max subarray ending at i. Foundation of many variants.",
        recurrence: "dp[i] = max(nums[i], dp[i-1] + nums[i])",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        name: "Jump Game",
        tag: "Medium",
        why: "Reachability DP. Can we reach index i? Boolean dp array.",
        recurrence: "dp[i] = any dp[j] where j+nums[j] >= i",
        link: "https://leetcode.com/problems/jump-game/",
      },
      {
        name: "Jump Game II",
        tag: "Medium",
        why: "Minimum jumps variant. Greedy works but DP deepens intuition.",
        recurrence: "dp[i] = min jumps to reach i",
        link: "https://leetcode.com/problems/jump-game-ii/",
      },
      {
        name: "Decode Ways",
        tag: "Medium",
        why: "Count paths with constraints. Great for 'how many ways' problems.",
        recurrence: "dp[i] = dp[i-1] (1-digit) + dp[i-2] (2-digit if valid)",
        link: "https://leetcode.com/problems/decode-ways/",
      },
    ],
  },
  {
    id: 3,
    title: "Phase 3 — 2D DP (Grid / Two Sequences)",
    subtitle: "State = (i, j). Usually two inputs or two pointers.",
    color: "#f472b6",
    bg: "#1a0a12",
    steps: [
      "Draw a 2D table, label rows & cols",
      "Fill base row (i=0) and base col (j=0)",
      "Define transition: what dp[i][j] depends on",
      "Read answer at dp[n][m]",
    ],
    problems: [
      {
        name: "Unique Paths",
        tag: "Medium",
        why: "Simplest 2D grid. Only right/down moves. Count paths.",
        recurrence: "dp[i][j] = dp[i-1][j] + dp[i][j-1]",
        link: "https://leetcode.com/problems/unique-paths/",
      },
      {
        name: "Minimum Path Sum",
        tag: "Medium",
        why: "Add cost to each cell. Min-cost path in grid.",
        recurrence: "dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])",
        link: "https://leetcode.com/problems/minimum-path-sum/",
      },
      {
        name: "Longest Common Subsequence",
        tag: "Medium",
        why: "Cornerstone of string DP. Master this and Edit Distance follows naturally.",
        recurrence: "dp[i][j] = dp[i-1][j-1]+1 if match, else max(dp[i-1][j], dp[i][j-1])",
        link: "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        name: "Edit Distance",
        tag: "Hard",
        why: "Three operations: insert, delete, replace. Rich transition logic.",
        recurrence: "dp[i][j] = min(insert, delete, replace)",
        link: "https://leetcode.com/problems/edit-distance/",
      },
      {
        name: "Longest Palindromic Subsequence",
        tag: "Medium",
        why: "LCS(s, reverse(s)). Or standalone 2D interval DP.",
        recurrence: "dp[i][j] depends on s[i]==s[j]",
        link: "https://leetcode.com/problems/longest-palindromic-subsequence/",
      },
    ],
  },
  {
    id: 4,
    title: "Phase 4 — Knapsack Family",
    subtitle: "Classic capacity + items framework.",
    color: "#fb923c",
    bg: "#1c0a00",
    steps: [
      "Identify: items, weights/costs, capacity",
      "dp[i][w] = best value using i items with capacity w",
      "0/1 knapsack: item used at most once",
      "Unbounded: item can repeat",
    ],
    problems: [
      {
        name: "Partition Equal Subset Sum",
        tag: "Medium",
        why: "0/1 Knapsack in disguise. Target = sum/2. Boolean dp.",
        recurrence: "dp[j] = dp[j] || dp[j - nums[i]]",
        link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      },
      {
        name: "Target Sum",
        tag: "Medium",
        why: "Count ways to assign +/- to reach target. Knapsack count variant.",
        recurrence: "dp[j] += dp[j - nums[i]]",
        link: "https://leetcode.com/problems/target-sum/",
      },
      {
        name: "Coin Change",
        tag: "Medium",
        why: "Unbounded knapsack. Minimum coins to make amount.",
        recurrence: "dp[i] = min(dp[i], dp[i - coin] + 1)",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        name: "Coin Change II",
        tag: "Medium",
        why: "Count combinations, not minimum. Order matters vs doesn't — learn both.",
        recurrence: "dp[i] += dp[i - coin]",
        link: "https://leetcode.com/problems/coin-change-ii/",
      },
      {
        name: "Last Stone Weight II",
        tag: "Hard",
        why: "Subtle reduction to partition problem. Great for creative problem reduction.",
        recurrence: "Partition Equal Subset Sum variant",
        link: "https://leetcode.com/problems/last-stone-weight-ii/",
      },
    ],
  },
  {
    id: 5,
    title: "Phase 5 — Intervals & Palindromes",
    subtitle: "State = (left, right). Fill by increasing length.",
    color: "#a78bfa",
    bg: "#0d0820",
    steps: [
      "Iterate by length of subarray (len = 1 → n)",
      "For each length, iterate all starting points i",
      "j = i + len - 1",
      "dp[i][j] depends on dp[i+1][j-1] and neighbors",
    ],
    problems: [
      {
        name: "Palindromic Substrings",
        tag: "Medium",
        why: "Count all palindromes. dp[i][j] = true if s[i..j] is palindrome.",
        recurrence: "dp[i][j] = s[i]==s[j] && dp[i+1][j-1]",
        link: "https://leetcode.com/problems/palindromic-substrings/",
      },
      {
        name: "Longest Palindromic Substring",
        tag: "Medium",
        why: "Same table, track max length. Interval DP base.",
        recurrence: "dp[i][j] = s[i]==s[j] && dp[i+1][j-1]",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        name: "Burst Balloons",
        tag: "Hard",
        why: "Partition interval DP. Think: which balloon bursts LAST, not first.",
        recurrence: "dp[i][j] = max over k of nums[i-1]*nums[k]*nums[j+1] + dp[i][k-1] + dp[k+1][j]",
        link: "https://leetcode.com/problems/burst-balloons/",
      },
      {
        name: "Stone Game",
        tag: "Medium",
        why: "Turn-based interval game. dp[i][j] = score diff when optimal.",
        recurrence: "dp[i][j] = max(piles[i] - dp[i+1][j], piles[j] - dp[i][j-1])",
        link: "https://leetcode.com/problems/stone-game/",
      },
    ],
  },
  {
    id: 6,
    title: "Phase 6 — DP on Trees & Graphs",
    subtitle: "State lives on nodes. Transitions via DFS.",
    color: "#34d399",
    bg: "#011a0e",
    steps: [
      "Define dp[node] clearly",
      "Run DFS; compute children first (post-order)",
      "Combine children results at each node",
      "Root holds the final answer",
    ],
    problems: [
      {
        name: "Diameter of Binary Tree",
        tag: "Easy",
        why: "dp[node] = max depth of left + right. Classic tree DP intro.",
        recurrence: "depth = 1 + max(left, right); ans = max(left+right)",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
      {
        name: "Binary Tree Maximum Path Sum",
        tag: "Hard",
        why: "Path can go through any node. Track gain vs answer separately.",
        recurrence: "maxGain(node) = node.val + max(0, left, right)",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        name: "House Robber III",
        tag: "Medium",
        why: "Tree version of House Robber. dp returns (rob, skip) pair per node.",
        recurrence: "rob = node + skip_left + skip_right",
        link: "https://leetcode.com/problems/house-robber-iii/",
      },
    ],
  },
  {
    id: 7,
    title: "Phase 7 — Bitmask & Advanced",
    subtitle: "State includes subset of items as bitmask.",
    color: "#f87171",
    bg: "#1a0000",
    steps: [
      "Represent subset as integer bitmask",
      "dp[mask] = best value using items in mask",
      "Iterate all 2^n masks",
      "For each mask, try adding one more item",
    ],
    problems: [
      {
        name: "Counting Bits",
        tag: "Easy",
        why: "Gentle intro to bit-based DP.",
        recurrence: "dp[i] = dp[i >> 1] + (i & 1)",
        link: "https://leetcode.com/problems/counting-bits/",
      },
      {
        name: "Traveling Salesman (TSP)",
        tag: "Hard",
        why: "Classic bitmask DP. dp[mask][i] = min cost to visit all in mask, ending at i.",
        recurrence: "dp[mask][i] = min over j of dp[mask^(1<<i)][j] + dist[j][i]",
        link: "https://leetcode.com/problems/find-the-shortest-superstring/",
      },
      {
        name: "Palindrome Partitioning II",
        tag: "Hard",
        why: "Combines palindrome precomputation + 1D DP cuts.",
        recurrence: "dp[i] = min cuts to partition s[0..i]",
        link: "https://leetcode.com/problems/palindrome-partitioning-ii/",
      },
      {
        name: "Regular Expression Matching",
        tag: "Hard",
        why: "dp[i][j] = does pattern[0..j] match string[0..i]. Tricky * handling.",
        recurrence: "dp[i][j] based on p[j]=='*' or match",
        link: "https://leetcode.com/problems/regular-expression-matching/",
      },
    ],
  },
];

export default function DPRoadmap() {
  const [expanded, setExpanded] = useState({ "0-0": true });
  const [completedProblems, setCompletedProblems] = useState({});

  const toggleProblem = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleDone = (key, e) => {
    e.stopPropagation();
    setCompletedProblems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalProblems = phases.reduce((a, p) => a + p.problems.length, 0);
  const doneCount = Object.values(completedProblems).filter(Boolean).length;

  return (
    <div
      style={{
        background: "#080c14",
        minHeight: "100vh",
        fontFamily: "'Courier New', monospace",
        padding: "2rem 1rem",
        color: "#e2e8f0",
      }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "#4ade80",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
            }}
          >
            Complete Learning System
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              fontFamily: "Georgia, serif",
              color: "#f1f5f9",
              margin: 0,
            }}
          >
            Dynamic Programming
          </h1>
          <p style={{ color: "#94a3b8", marginTop: "0.5rem", fontSize: "0.9rem" }}>
            7 phases · {totalProblems} problems · small → big
          </p>

          {/* Progress bar */}
          <div
            style={{
              marginTop: "1.2rem",
              background: "#1e293b",
              borderRadius: 99,
              height: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${(doneCount / totalProblems) * 100}%`,
                background: "linear-gradient(90deg, #4ade80, #60a5fa)",
                borderRadius: 99,
                transition: "width 0.4s ease",
              }}
            />
          </div>
          <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "0.4rem" }}>
            {doneCount} / {totalProblems} solved
          </div>
        </div>

        {/* 5-Step Method box */}
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e3a5f",
            borderRadius: 12,
            padding: "1.2rem 1.5rem",
            marginBottom: "2rem",
            borderLeft: "4px solid #60a5fa",
          }}
        >
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#60a5fa", marginBottom: "0.6rem" }}>
            THE 5-STEP DP METHOD (apply to every problem)
          </div>
          {[
            ["1. Identify", "Is it asking for max/min/count/true-false over choices? → DP candidate."],
            ["2. Define State", "What does dp[i] or dp[i][j] represent? Write it in English first."],
            ["3. Recurrence", "How does dp[i] depend on smaller subproblems?"],
            ["4. Base Cases", "What are the smallest inputs you can answer directly?"],
            ["5. Order & Answer", "Fill in correct order. Where is the final answer?"],
          ].map(([step, desc]) => (
            <div key={step} style={{ display: "flex", gap: "0.8rem", marginBottom: "0.4rem", alignItems: "flex-start" }}>
              <span style={{ color: "#60a5fa", fontWeight: 700, minWidth: 90, fontSize: "0.78rem" }}>{step}</span>
              <span style={{ color: "#94a3b8", fontSize: "0.8rem", lineHeight: 1.5 }}>{desc}</span>
            </div>
          ))}
        </div>

        {/* Phases */}
        {phases.map((phase, pi) => (
          <div key={phase.id} style={{ marginBottom: "2rem" }}>
            <div
              style={{
                background: phase.bg,
                border: `1px solid ${phase.color}22`,
                borderLeft: `4px solid ${phase.color}`,
                borderRadius: "12px 12px 0 0",
                padding: "1rem 1.4rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    background: phase.color + "22",
                    color: phase.color,
                    border: `1px solid ${phase.color}44`,
                    borderRadius: 6,
                    padding: "2px 10px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  PHASE {phase.id}
                </span>
                <span style={{ fontWeight: 700, fontSize: "1rem", color: "#f1f5f9" }}>{phase.title}</span>
              </div>
              <p style={{ color: "#94a3b8", fontSize: "0.82rem", margin: "0.4rem 0 0.8rem 0" }}>
                {phase.subtitle}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "0.4rem",
                }}
              >
                {phase.steps.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: "0.73rem",
                      color: "#cbd5e1",
                      background: "#ffffff08",
                      borderRadius: 6,
                      padding: "4px 10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <span style={{ color: phase.color, fontWeight: 700 }}>{i + 1}.</span> {s}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ border: `1px solid ${phase.color}22`, borderTop: "none", borderRadius: "0 0 12px 12px", overflow: "hidden" }}>
              {phase.problems.map((prob, idx) => {
                const key = `${pi}-${idx}`;
                const isOpen = expanded[key];
                const isDone = completedProblems[key];
                return (
                  <div
                    key={idx}
                    style={{
                      borderTop: idx > 0 ? "1px solid #1e293b" : "none",
                      background: isDone ? "#0a1a0a" : "#0d1117",
                      transition: "background 0.2s",
                    }}
                  >
                    <div
                      onClick={() => toggleProblem(key)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                        padding: "0.8rem 1.2rem",
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                    >
                      <button
                        onClick={(e) => toggleDone(key, e)}
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 4,
                          border: `2px solid ${isDone ? "#4ade80" : "#334155"}`,
                          background: isDone ? "#4ade80" : "transparent",
                          cursor: "pointer",
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#000",
                          fontWeight: 700,
                          fontSize: 11,
                        }}
                      >
                        {isDone ? "✓" : ""}
                      </button>

                      <span
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: isDone ? "#4ade80" : "#e2e8f0",
                          flex: 1,
                          textDecoration: isDone ? "line-through" : "none",
                          textDecorationColor: "#4ade8088",
                        }}
                      >
                        {prob.name}
                      </span>

                      <span
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: 99,
                          border: "1px solid",
                          letterSpacing: "0.08em",
                          background:
                            prob.tag === "Hard" ? "#7f1d1d44" :
                            prob.tag === "Medium" ? "#1e3a5f44" :
                            prob.tag === "Easy" ? "#14532d44" : "#78350f44",
                          color:
                            prob.tag === "Hard" ? "#fca5a5" :
                            prob.tag === "Medium" ? "#93c5fd" :
                            prob.tag === "Easy" ? "#86efac" : "#fde68a",
                          borderColor:
                            prob.tag === "Hard" ? "#7f1d1d" :
                            prob.tag === "Medium" ? "#1e3a5f" :
                            prob.tag === "Easy" ? "#14532d" : "#78350f",
                        }}
                      >
                        {prob.tag}
                      </span>

                      <span style={{ color: "#475569", fontSize: "0.75rem" }}>{isOpen ? "▲" : "▼"}</span>
                    </div>

                    {isOpen && (
                      <div
                        style={{
                          padding: "0 1.2rem 1rem 3.4rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0, lineHeight: 1.6 }}>
                          <span style={{ color: "#64748b", fontWeight: 700 }}>WHY: </span>
                          {prob.why}
                        </p>
                        <div
                          style={{
                            background: "#0f172a",
                            border: "1px solid #1e293b",
                            borderRadius: 6,
                            padding: "0.4rem 0.8rem",
                            fontFamily: "'Courier New', monospace",
                            fontSize: "0.75rem",
                            color: phase.color,
                          }}
                        >
                          <span style={{ color: "#475569" }}>recurrence: </span>
                          {prob.recurrence}
                        </div>
                        <a
                          href={prob.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            fontSize: "0.75rem",
                            color: "#60a5fa",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          → Solve on LeetCode
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: 10,
            padding: "1rem 1.4rem",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          <p style={{ color: "#64748b", fontSize: "0.78rem", margin: 0 }}>
            💡 For each problem: first solve brute-force recursion → add memoization → convert to tabulation → optimize space.
          </p>
        </div>
      </div>
    </div>
  );
}
