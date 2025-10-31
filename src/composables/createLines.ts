/**
 * Represents a single code line with optional syntax highlighting class
 */
export interface CodeLine {
  num: number
  content: string
  class: string
}

/**
 * Input format for creating code lines
 * Can be either:
 * - A string (content only, no class)
 * - An object with content and optional class
 */
export type CodeLineInput = string | { content: string; class?: string }

/**
 * Create lines for the code editor with automatic line numbering
 * 
 * @param lines - Array of code line inputs (strings or objects with content/class)
 * @returns Array of code lines with line numbers
 * 
 * ])
 */
export function createLines(lines: CodeLineInput[]): CodeLine[] {
  return lines.map((line, index) => {
    if (typeof line === 'string') {
      return {
        num: index + 1,
        content: line,
        class: ''
      }
    }
    
    return {
      num: index + 1,
      content: line.content,
      class: line.class || ''
    }
  })
}

/**
 * Create lines for the code editor with automatic line numbering
 * Legacy function for backward compatibility - accepts array of strings and a single class
 * 
 * @deprecated Use createLines() with objects instead
 * @param lines - Array of strings
 * @param classType - CSS class to apply to all lines
 * @returns Array of lines
 */
export function createLinesWithClass(lines: string[], classType: string): CodeLine[] {
  return createLines(lines.map(line => ({ content: line, class: classType })))
}

/**
 * Create lines for the code editor with automatic line numbering
 * Legacy function for backward compatibility - accepts array of strings and array of classes
 * 
 * @deprecated Use createLines() with objects instead
 * @param lines - Array of strings
 * @param classes - Array of CSS classes (one per line)
 * @returns Array of lines
 */
export function createLinesWithClasses(lines: string[], classes: string[]): CodeLine[] {
  return createLines(lines.map((line, index) => ({
    content: line,
    class: classes[index] || ''
  })))
}