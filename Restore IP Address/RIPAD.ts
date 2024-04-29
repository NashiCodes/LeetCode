function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];
  const len = s.length;

  function Backtrack(i: number, dots: number, curIp: string) {
    if (i === len && dots === 4) {
      return result.push(curIp.slice(0, -1));
    }

    if (dots >= 4) {
      return;
    }

    for (let j = i; j <= Math.min(i + 3, len); j++) {
      const num = parseInt(s.slice(i, j + 1));
      if (num <= 255 && (i == j || s[i] != "0")) {
        Backtrack(j + 1, dots + 1, curIp + num + ".");
      }
    }
  }

  Backtrack(0, 0, "");

  return result;
}

restoreIpAddresses("25525511135");
