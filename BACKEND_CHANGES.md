# Backend Changes Required

## File: `apps/blogs_app/models.py`

### 1. Add to FeaturesPage class (around line 2800):

```python
class FeaturesPage(Page):
    """
    Unified blog page that displays blog content
    """
    # ===== LAYOUT SELECTION =====
    LAYOUT_CHOICES = [
        ('esignature', 'ESignature Layout'),
        ('w9_chaser', 'W9 Chaser Layout'),
        ('bulk_sms', 'Bulk SMS Layout'),
        ('bulk_whatsapp', 'Bulk WhatsApp Layout'),
        ('bulk_email', 'Bulk Email Layout'),
        ('document_merge', 'Document Merge Layout'),
    ]
    
    page_layout = models.CharField(
        max_length=20,
        choices=LAYOUT_CHOICES,
        default='esignature',
        blank=True,
        help_text="Choose the layout style for this feature page"
    )
    
    # ===== HEADER SECTION =====
    header_config = models.ForeignKey(
        # ... rest of existing code
```

### 2. Add to content_panels (around line 3100):

```python
content_panels = Page.content_panels + [
    # Layout Selection - ADD THIS FIRST
    FieldPanel('page_layout'),
    
    # Header Section
    MultiFieldPanel([
        # ... rest of existing panels
```

### 3. Run migrations:

```bash
python manage.py makemigrations blogs_app
python manage.py migrate blogs_app
```

### 4. Update pages in Wagtail Admin:

Go to each feature page and select the appropriate layout:

| Page Name | Layout to Select |
|-----------|------------------|
| ESignature | ESignature Layout |
| W9 Chaser | W9 Chaser Layout |
| Bulk SMS Campaign | Bulk SMS Layout |
| Bulk Sms WhatsApp | Bulk WhatsApp Layout |
| Bulk Email Campaign | Bulk Email Layout |
| Document Merge | Document Merge Layout |

## That's it! 

The API will automatically include the `page_layout` field in the response, and the frontend will render the correct layout.
