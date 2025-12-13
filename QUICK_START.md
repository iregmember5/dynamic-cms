# 🚀 Quick Start - 6 Feature Page Layouts

## Frontend ✅ DONE

All 6 layouts are ready in your React app!

## Backend 🔧 TODO (5 minutes)

### Step 1: Open your backend repo

```bash
cd /path/to/your/backend
```

### Step 2: Edit `apps/blogs_app/models.py`

Find the `FeaturesPage` class and add this field at the top:

```python
page_layout = models.CharField(
    max_length=20,
    choices=[
        ('esignature', 'ESignature Layout'),
        ('w9_chaser', 'W9 Chaser Layout'),
        ('bulk_sms', 'Bulk SMS Layout'),
        ('bulk_whatsapp', 'Bulk WhatsApp Layout'),
        ('bulk_email', 'Bulk Email Layout'),
        ('document_merge', 'Document Merge Layout'),
    ],
    default='esignature',
    blank=True,
    help_text="Choose the layout style for this feature page"
)
```

### Step 3: Add to content_panels

In the same file, add this as the FIRST item in `content_panels`:

```python
content_panels = Page.content_panels + [
    FieldPanel('page_layout'),  # ADD THIS
    # ... rest of panels
]
```

### Step 4: Run migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 5: Update pages in Wagtail Admin

1. Go to Wagtail Admin
2. For each feature page, select the matching layout:
   - **ESignature** → ESignature Layout
   - **W9 Chaser** → W9 Chaser Layout
   - **Bulk SMS Campaign** → Bulk SMS Layout
   - **Bulk Sms WhatsApp** → Bulk WhatsApp Layout
   - **Bulk Email Campaign** → Bulk Email Layout
   - **Document Merge** → Document Merge Layout

### Step 6: Test!

Visit your frontend and see the different layouts:
- http://localhost:5173/features/esignature
- http://localhost:5173/features/w9-chaser
- http://localhost:5173/features/bulk-sms-campaign
- etc.

## 🎉 Done!

Each feature page now has its own unique layout while using the same data!

---

**Need more details?** See `LAYOUTS_SUMMARY.md` or `LAYOUT_SETUP_GUIDE.md`
