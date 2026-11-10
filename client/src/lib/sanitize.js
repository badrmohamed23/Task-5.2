import DOMPurify from 'dompurify';

// Keep the small set of formatting needed for reviews while removing scripts,
// event handlers, and unsafe URL schemes before content reaches innerHTML.
export const sanitizeHtml = (dirty) => DOMPurify.sanitize(dirty ?? '', {
  ALLOWED_TAGS: ['a', 'b', 'blockquote', 'br', 'code', 'em', 'i', 'li', 'ol', 'p', 'strong', 'ul'],
  ALLOWED_ATTR: ['href', 'title'],
  ALLOW_DATA_ATTR: false
});
