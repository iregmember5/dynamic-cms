# Feature Page Layouts Setup Guide

## Overview
This guide explains how to set up 6 different layouts for your feature pages in Wagtail CMS.

## ✅ Frontend Setup (COMPLETED)

The frontend now has 6 different layouts:
1. **ESignature Layout** - Professional & trustworthy design
2. **W9 Chaser Layout** - Bold & action-oriented design
3. **Bulk SMS Layout** - Mobile-first, conversion-focused design
4. **Bulk WhatsApp Layout** - WhatsApp green theme with chat-style design
5. **Bulk Email Layout** - Email marketing theme with gradients
6. **Document Merge Layout** - Professional document-focused design

## 🔧 Backend Setup (TODO)

### Step 1: Add Layout Field to FeaturesPage Model

In your backend repo, open `apps/blogs_app/models.py` and add this field to the `FeaturesPage` class:

```python
class FeaturesPage(Page):
    # Add this at the top of your model fields
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
    
    # ... rest of your existing fields ...
```

### Step 2: Add to Content Panels

In the same file, add the field to `content_panels`:

```python
content_panels = Page.content_panels + [
    # Add this at the very top
    FieldPanel('page_layout'),
    
    # ... rest of your existing panels ...
]
```

### Step 3: Add to API Serialization

In your API view/serializer (wherever you serialize FeaturesPage data), add:

```python
# If using Wagtail API
class FeaturesPageSerializer(PageSerializer):
    page_layout = serializers.CharField()
    
    class Meta:
        model = FeaturesPage
        fields = PageSerializer.Meta.fields + ['page_layout', ...]

# Or if manually building the response dict:
def get_features_page_data(page):
    return {
        'id': page.id,
        'title': page.title,
        'page_layout': page.page_layout,  # Add this line
        # ... rest of your fields
    }
```

### Step 4: Run Migrations

```bash
cd /path/to/your/backend
python manage.py makemigrations
python manage.py migrate
```

### Step 5: Update Existing Pages

Go to Wagtail admin and update each feature page:

1. **ESignature** → Select "ESignature Layout"
2. **W9 Chaser** → Select "W9 Chaser Layout"
3. **Bulk SMS Campaign** → Select "Bulk SMS Layout"
4. **Bulk SMS WhatsApp** → Select "Bulk WhatsApp Layout"
5. **Bulk Email Campaign** → Select "Bulk Email Layout"
6. **Document Merge** → Select "Document Merge Layout"

## 🎨 Layout Descriptions

### 1. ESignature Layout
- **Style**: Professional, trustworthy, corporate
- **Colors**: Blue gradient (blue-50 to indigo-100)
- **Best for**: Legal, compliance, security-focused products
- **Key features**: Trust indicators, clean grid, professional CTA

### 2. W9 Chaser Layout
- **Style**: Bold, action-oriented, urgent
- **Colors**: Purple to pink gradient
- **Best for**: Time-sensitive, action-driven products
- **Key features**: Large hero, problem/solution cards, urgent CTA

### 3. Bulk SMS Layout
- **Style**: Mobile-first, conversion-focused
- **Colors**: Green to teal gradient
- **Best for**: SMS marketing, mobile communication
- **Key features**: Stats bar, icon grid, timeline steps

### 4. Bulk WhatsApp Layout
- **Style**: WhatsApp-themed, chat-style
- **Colors**: WhatsApp green (#25D366)
- **Best for**: WhatsApp business, messaging products
- **Key features**: Chat bubbles, WhatsApp colors, use cases

### 5. Bulk Email Layout
- **Style**: Email marketing, gradient-heavy
- **Colors**: Indigo to purple to pink gradient
- **Best for**: Email marketing, newsletter products
- **Key features**: Email cards, visual steps, testimonials

### 6. Document Merge Layout
- **Style**: Professional, document-focused
- **Colors**: Slate gray (slate-800 to slate-900)
- **Best for**: Document automation, business tools
- **Key features**: Process flow, professional design, use cases

## 🧪 Testing

After backend setup:

1. Visit your frontend: `http://localhost:5173/features/esignature`
2. Check that the correct layout renders
3. Test all 6 pages:
   - `/features/esignature`
   - `/features/w9-chaser`
   - `/features/bulk-sms-campaign`
   - `/features/bulk-sms-whatsapp`
   - `/features/bulk-email-campaign`
   - `/features/document-merge`

## 🔄 How It Works

1. **Backend**: Stores `page_layout` field in database
2. **API**: Returns `page_layout` value in JSON response
3. **Frontend**: Reads `page_layout` and renders corresponding layout component
4. **Same Data**: All layouts use the same data fields (header_title, features, etc.)
5. **Different Design**: Each layout has unique HTML/CSS structure

## 📝 Adding New Layouts

To add a new layout:

1. Create new layout component: `src/components/features/layouts/NewLayout.tsx`
2. Export it in `src/components/features/layouts/index.ts`
3. Add choice to backend `LAYOUT_CHOICES`
4. Add case in `FeaturesPage.tsx` switch statement
5. Update TypeScript type in `features-page.ts`

## 🎯 Benefits

✅ Same data structure for all pages
✅ Different visual designs per product
✅ Easy to maintain (change data once, updates all layouts)
✅ Flexible (editors choose layout in Wagtail admin)
✅ Scalable (easy to add more layouts)

## 🚀 Next Steps

1. Complete backend setup (Steps 1-4 above)
2. Update existing pages in Wagtail admin (Step 5)
3. Test all layouts
4. Customize colors/styles if needed
5. Add more layouts as needed

## 📞 Support

If you need help:
- Check that `page_layout` field is in API response
- Verify layout value matches switch cases
- Check browser console for errors
- Ensure all imports are correct
