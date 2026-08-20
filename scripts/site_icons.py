# Hand-authored inline SVG icon set (Heroicons-outline style, currentColor stroke).
# Keeping these as real vector <svg> markup rather than emoji/webfont glyphs.

def icon(name, size=22):
    paths = {
        "tv": '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
        "firestick": '<rect x="7" y="2" width="10" height="16" rx="3"/><path d="M9 22h6M12 18v4"/>',
        "mobile": '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/>',
        "apple": '<path d="M16.5 7.5c-1-1-2.3-1.4-3.4-1-.1-1.1.4-2.3 1.1-3-1.2-.1-2.6.6-3.4 1.5-.7.8-1.3 2-1.1 3.2 1.2.1 2.4-.6 3.2-1.4M18.5 16.2c-.5 1.1-.8 1.6-1.4 2.6-.9 1.3-2.2 3-3.6 3-1.2 0-1.6-.8-3.1-.8s-1.9.8-3.1.8c-1.4 0-2.6-1.5-3.5-2.8-2.4-3.5-2.7-7.5-1.2-9.7.9-1.4 2.5-2.3 4-2.3 1.4 0 2.3.9 3.5.9s2-.9 3.6-.9c1.2 0 2.6.7 3.5 1.9-3 1.7-2.6 6 1.3 7.3z"/>',
        "laptop": '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M2 20h20"/>',
        "box": '<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/>',
        "signal": '<path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 20V4"/>',
        "play": '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5v-7z"/>',
        "check": '<path d="M20 6L9 17l-5-5"/>',
        "star": '<path d="M12 2.5l2.9 6 6.6.6-5 4.5 1.5 6.5-6-3.5-6 3.5 1.5-6.5-5-4.5 6.6-.6z"/>',
        "chevron": '<path d="M6 9l6 6 6-6"/>',
        "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
        "whatsapp": '<path d="M20.5 3.5a10.5 10.5 0 00-17.9 10.9L2 21l6.8-.6A10.5 10.5 0 1020.5 3.5z"/><path d="M8.3 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.7 1.6.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.6-.1.2.1 1.6.8 1.9.9.3.1.5.2.5.3.1.4.1.8-.1 1.2-.2.4-1.2 1.1-2.3 1.2-1 .1-2 0-4.5-1-3.1-1.2-5-4.4-5.2-4.6-.2-.2-1.3-1.7-1.3-3.3 0-1.5.8-2.3 1.1-2.6z"/>',
        "mail": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
        "alert": '<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L2.5 17a1.8 1.8 0 001.5 2.6h16a1.8 1.8 0 001.5-2.6L13.7 3.9a1.8 1.8 0 00-3.4 0z"/>',
        "key": '<circle cx="8" cy="15" r="4"/><path d="M10.8 12.2L19 4M16.5 6.5L19 9M13.5 9.5L16 12"/>',
        "wifi": '<path d="M5 12.5a11 11 0 0114 0M8.3 15.8a6.5 6.5 0 017.4 0M12 19h.01"/>',
        "search": '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
        "heart": '<path d="M12 20s-7-4.4-9.5-9C.7 7.6 2 4 5.5 4c2 0 3.3 1.1 4 2 .7.3 1.3.9 2.5 2 1.2-1.1 1.8-1.7 2.5-2 .7-.9 2-2 4-2C21 4 22.3 7.6 20.5 11c-2.5 4.6-9.5 9-9.5 9z"/>',
        "grid": '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
        "gauge": '<path d="M4 14a8 8 0 1116 0M12 14l4-4"/>',
        "sparkles": '<path d="M12 3l1.4 3.9L17 8l-3.6 1.1L12 13l-1.4-3.9L7 8l3.6-1.1zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
        "headset": '<path d="M4 13v-1a8 8 0 0116 0v1"/><rect x="2" y="13" width="5" height="6" rx="1.5"/><rect x="17" y="13" width="5" height="6" rx="1.5"/><path d="M20 19v1a2 2 0 01-2 2h-3"/>',
        "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
        "list": '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
        "coins": '<ellipse cx="9" cy="7" rx="6" ry="3"/><path d="M3 7v10c0 1.7 2.7 3 6 3s6-1.3 6-3M15 8.5c2.9.4 4.5 1.6 4.5 3v6c0 1.6-2.4 3-5.4 3-2.3 0-4.3-.7-5.1-1.9"/>',
        "users": '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.5 3-5.5 6.5-5.5s6 2 6.5 5.5"/><circle cx="17" cy="9" r="2.8"/><path d="M15.5 14.3c2.6.3 4.3 2.1 4.9 5"/>',
        "shield": '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
        "palette": '<circle cx="12" cy="12" r="9"/><circle cx="8.5" cy="10.5" r="1.2" fill="currentColor"/><circle cx="12" cy="8" r="1.2" fill="currentColor"/><circle cx="15.5" cy="10.5" r="1.2" fill="currentColor"/><path d="M12 21a2 2 0 010-4h1a2 2 0 000-4h-.5"/>',
        "refresh": '<path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
        "network": '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7.2V14M12 14L6.5 17.3M12 14l5.5 3.3"/>',
        "download": '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 19h16"/>',
        "guide": '<path d="M4 4h11l5 5v11H4z"/><path d="M14 4v6h6M8 13h8M8 17h5"/>',
        "gamepad": '<rect x="2" y="8" width="20" height="10" rx="5"/><path d="M7 11v4M5 13h4M16 12h.01M18.5 14h.01"/>',
        "settings": '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-1.8-.3 1.6 1.6 0 00-1 1.5V21a2 2 0 11-4 0v-.2a1.6 1.6 0 00-1-1.5 1.6 1.6 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.6 1.6 0 00.3-1.8 1.6 1.6 0 00-1.5-1H3a2 2 0 110-4h.2a1.6 1.6 0 001.5-1 1.6 1.6 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.6 1.6 0 001.8.3H9a1.6 1.6 0 001-1.5V3a2 2 0 114 0v.2a1.6 1.6 0 001 1.5 1.6 1.6 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.3 1.8V9a1.6 1.6 0 001.5 1h.2a2 2 0 110 4h-.2a1.6 1.6 0 00-1.5 1z"/>',
        "film": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 15h4M17 15h4"/>',
        "trophy": '<path d="M8 4h8v5a4 4 0 01-8 0V4z"/><path d="M5 5H3v2a3 3 0 003 3M19 5h2v2a3 3 0 01-3 3M12 13v3M9 20h6M9.5 20c-.3-1.5 0-2.6 1-3h3c1 .4 1.3 1.5 1 3"/>',
        "plus-circle": '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
        "layers": '<path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5M3 17l9 5 9-5"/>',
        "cursor-click": '<path d="M9 3l10 6-4 1 3 5-2.5 1.5-3-5-3 3z"/>',
    }
    p = paths.get(name, paths["check"])
    return (
        f'<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" '
        f'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" '
        f'stroke-linejoin="round" aria-hidden="true">{p}</svg>'
    )
