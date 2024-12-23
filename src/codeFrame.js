export const codeFrameColumns = (raw, loc) => {
  const lines = raw.split(/\r\n|[\n\r\u2028\u2029]/);

  const startLoc = Object.assign({ column: 0, line: -1 }, loc.start);
  const endLoc = Object.assign({}, startLoc, loc.end);

  const startLine = startLoc.line;
  const startColumn = startLoc.column;
  const endLine = endLoc.line;
  const endColumn = endLoc.column;

  const start = startLine === -1 ? 0 : Math.max(startLine - 3, 0);
  const end = endLine === -1 ? lines.length : Math.min(lines.length, endLine + 3);

  const lineDiff = endLine - startLine;
  const markerLines = new Map();

  if (lineDiff) {
    for (let i = 0; i <= lineDiff; i++) {
      const lineNumber = i + startLine;

      if (!startColumn) {
        markerLines.set(lineNumber, true);
      } else if (i === 0) {
        const sourceLength = lines[lineNumber - 1].length;
        markerLines.set(lineNumber, [startColumn, sourceLength - startColumn]);
      } else if (i === lineDiff) {
        markerLines.set(lineNumber, [0, endColumn]);
      } else {
        const sourceLength = lines[lineNumber - i].length;
        markerLines.set(lineNumber, [0, sourceLength]);
      }
    }
  } else {
    if (startColumn === endColumn) {
      if (startColumn) {
        markerLines.set(startLine, [startColumn, 0]);
      } else {
        markerLines.set(startLine, true);
      }
    } else {
      markerLines.set(startLine, [startColumn, endColumn - startColumn]);
    }
  }

  const numberMaxWidth = String(end).length;

  return lines
    .slice(start, end)
    .map((line, index) => {
      const number = start + 1 + index;
      const paddedNumber = ` ${number}`.slice(-numberMaxWidth);
      const gutter = ` ${paddedNumber} | `;
      const hasMarker = markerLines.get(number);

      if (hasMarker) {
        let markerLine = '';

        if (Array.isArray(hasMarker)) {
          const markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, ' ');
          const numberOfMarkers = hasMarker[1] || 1;

          markerLine = `\n ${gutter.replace(/\d/g, ' ')}${markerSpacing}${'^'.repeat(numberOfMarkers)}`;
        }

        return `>${gutter}${line}${markerLine}`;
      }

      return ` ${gutter}${line}`;
    })
    .join('\n');
};
