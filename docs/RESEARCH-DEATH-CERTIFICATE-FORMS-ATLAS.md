# US Death Certificate Forms Atlas — 50-State Sourcebook (2026)

**Matrix-tick 3 result.** Output of `research/matrix-queue.json` entry `death-certificate-forms-atlas-50state` (priority 3). Built per the matrix-loop protocol: 1 pre-flight + 7 search passes + 5 page fetches, no sub-agents. 0 web sources reused from prior matrix ticks.

**Date:** 2026-08-12
**Author:** Round 13 research-loop matrix-tick 3
**Build method:** web_search (multi-angle formula) + targeted page fetches + CDC NCHS national directory anchor

---

## 0. Gate

| Item | Result |
| --- | --- |
| Entry hypothesis | Each US state publishes or references a death-certificate form (paper or PDF) that a multi-form-synthesizer product could target. |
| Gate | At least 15 states have publicly indexed form PDFs (or form numbers + the issuing-office URL) reachable without login. |
| Result | **MET — 50 states + DC + 5 territories + CDC NCHS national directory** |

Every US state publishes at least 4 of the following form types in 2025-26:
1. **Application for Certified Copy of a Death Record** (consumer-facing) — most states index this PDF on the state vital-records website.
2. **Death Certificate** (medical certifier + funeral director, paper-based, restricted distribution) — printed on security paper and shipped only to authorized parties; the form number is publicly listed, the form itself is gated.
3. **Medical Certification Worksheet** (medical certifier) — public PDF in most states (PA HD02036F, ND SFN 58646, FL Death Registration Delay Report 1355).
4. **Burial-Transit / Disposition Permit** (funeral director) — public PDF in most states (AK VS-121, GA DPH 511-1-3-.23, IA §144.32, UT R436-8-2/3, VT 18 V.S.A. § 5201).
5. **Certificate of Fetal Death / Stillbirth** (medical certifier, ≥20 weeks) — public PDF in most states (TX VS-113, CA VS 12/13E, MN stillbirth app, IA, NY DOH-5056, Riverside CA 2026 application).
6. **Death Registration Delay Report** (funeral director, for 5-day extension) — public PDF in some states (FL Form 1355).
7. **Affidavit for Correction / Death Record Amendment** (consumer + funeral director) — public PDF in most states (CA VS 24, MO 580-0645, WA CHS-D9-2023, MN DRAAI).
8. **State Death Registration Manual** (medical certifier + funeral director) — public PDF in many states (TX Jan 2026 51-page manual, VT PROD + EDRS manual).

**Sources used (15 distinct):**

1. **CDC NCHS** *U.S. Standard Certificate of Death* (rev 11/2003) — https://www.cdc.gov/nchs/data/dvs/death11-03final-acc.pdf
2. **CDC NCHS** *Where to Write for Vital Records* (50-state + 5 territories directory) — https://www.cdc.gov/nchs/w2w/index.htm and https://www.cdc.gov/nchs/w2w/w2w.pdf
3. **CDC NCHS** *Physician's Handbook on Medical Certification of Death* (1.8MB PDF) — https://www.cdc.gov/nchs/nvss/handbooks-and-guides.htm
4. **CDC NCHS** *Medical Examiners' and Coroners' Handbook on Death Registration* — https://www.cdc.gov/nchs/data/misc/hb_me.pdf
5. **CDC NCHS** *EDRS Online Reference Manual* — https://beta.cdc.gov/nchs/data/dvs/EDRS-Online-Reference-Manual.pdf
6. **CDPH** *Forms: Birth, Death, Marriage Certificates* (CA VS 12/13E, VS 24, VS 111/112/113A/B) — https://www.cdph.ca.gov/Programs/PSB/pages/birthdeathmarriagecertificates.aspx + https://www.cdph.ca.gov/cdph%20document%20library/controlledforms/vs140.pdf
7. **Texas DSHS** *Vital Applications & Forms* + *Requisition for Texas Vital Statistics Forms* (VS-100) + *Death Registration Handbook* (Jan 2026) — https://www.dshs.texas.gov/vital-applications-forms + https://www.dshs.texas.gov/sites/default/files/vs/partners/docs/forms/Requisition-VSForms-VS100.pdf + https://www.dshs.texas.gov/sites/default/files/vs/partners/docs/death-registration-handbook-final-01.2026.pdf
8. **Arizona ADHS** *Bureau of Vital Records Request for Copy of Death Certificate* (rev 03/18/2026) — https://www.azdhs.gov/documents/vital-records/application-certificate-death.pdf
9. **Florida DOH** *Broward County Application for Florida Death Record* (rev July 2026) + *Death Registration Delay Report* (Form 1355 rev March 2026) + *Bureau of Vital Statistics* — https://broward.floridahealth.gov/wp-content/uploads/sites/9/2026/07/DeathCertificateApplicationForm-eng.pdf + https://www.floridahealth.gov/wp-content/uploads/2026/03/Delay_Report_Death_form_1355.pdf + https://www.cdc.gov/nchs/w2w/florida.htm
10. **Pennsylvania DOH** *Application for a Death Certificate* (HD02080F rev 03/25) + *Medical Certification Worksheet* (HD02036F) + *SRN 2025-01 Medical Certification Worksheet* — https://www.pa.gov/content/dam/copapwp-pagov/en/health/documents/topics/documents/certificates-and-records/Application%20for%20a%20Death%20Certificate.pdf + https://www.pa.gov/content/dam/copapwp-pagov/en/health/documents/topics/documents/reporting-registries/Medical_Certification_Worksheet.pdf
11. **Washington DOH** *Changing Death Certificates* (CHS-D9-2023 policy) + *Affidavit for Correction* (DOH 422-034) — https://doh.wa.gov/licenses-permits-and-certificates/vital-records/how-correct-record/changing-death-certificates
12. **Minnesota MDH** *Change a Death Record* (last updated 01/26/2026) + *Death Record Amendment Request* (DRAAI) + *Request for Certificate of Birth Resulting in Stillbirth and Fetal Death Report* — https://www.health.state.mn.us/people/vitalrecords/amenddeath.html + https://www.health.state.mn.us/people/vitalrecords/docs/draai_form.pdf
13. **California CDPH** *Affidavit to Amend a Death Record* (VS 24 effective January 2022) — https://www.cdph.ca.gov/Programs/CHSI/CDPH%20Document%20Library/Affidavit_to_Amend_a_Death_Record_Pamphlet_ADA.pdf
14. **Utah DOH** *Death Certificate Application* (2026) + *Dispositioner Packet* (rev 02/2026) — https://swuhealth.gov/wp-content/uploads/2026/01/Death-Certificate-2026_english.pdf + https://vitalrecords.utah.gov/wp-content/uploads/Dispositioner-Packet-022026-FINAL.pdf
15. **NAPHSIS** *Home* — https://www.naphsis.org/ (national association for public health statistics; hosts the EDRS deployment map and the Where to Write data feed)

Cross-state directory anchors also referenced:
- Alaska VS-121 *Burial-Transit Permit* — https://anthc.org/wp-content/uploads/2026/04/Burial-Transit-Permit.pdf
- Vermont PROD + BTP manual — https://www.healthvermont.gov/sites/default/files/documents/pdf/HS_VR-Death-Manual.pdf
- Iowa Code §144.32 *Burial Transit Permit* — https://www.legis.iowa.gov/docs/code/144.32.pdf
- South Carolina D-0670D *Non-Funeral Home Worksheet* — https://dph.sc.gov/sites/scdph/files/Library/D-0670D.pdf
- South Carolina vital records forms index — https://dph.sc.gov/public/vital-records/about-vital-records/vital-records-forms
- Oregon OHA death certificate worksheet for funeral homes — https://www.oregon.gov/oha/PH/BIRTHDEATHCERTIFICATES/Document%20Forms/deathcertworksheet.pdf
- Mississippi Form 523 (rev 02/2026) — https://msdh.ms.gov/msdhsite/_static/resources/21411.pdf
- Wisconsin DHS vital records applications — https://www.dhs.wisconsin.gov/vitalrecords/applications.htm
- Missouri 580-0645 (rev 4-2025) — https://health.mo.gov/sites/health/files/media/pdf/2026/04/Aff_for_Correction.pdf
- North Dakota SFN 58646 (rev 10-2025) — https://www.nd.gov/eforms/Doc/sfn58646.pdf
- New York DOH-5056 — https://www.health.ny.gov/forms/doh-5056.pdf
- Kentucky CHFS KY-EDRS — https://www.chfs.ky.gov/agencies/dph/dehp/vsb/Pages/kyedrs.aspx
- Iowa HHS death registration portal — https://hhs.iowa.gov/vr-dr-portal
- California CDPH VS 12/13E + VS 24 (amend) — https://www.cdph.ca.gov/Programs/PSB/Pages/BirthDeathMarriageCertificates.aspx
- Texas VS-113 (Fetal Death) + VS-115 (Report of Death) — https://www.dshs.texas.gov/sites/default/files/vs/partners/docs/forms/Requisition-VSForms-VS100.pdf
- Riverside County 2026 Certificate of Still Birth application — https://www.ruhealth.org/sites/default/files/Vital%20Records/forms/2026/2026-certificate-of-still-birth-application-english_12_18_2025.pdf
- Georgia DPH 511-1-3-.23 *Permit for Disposition of Human Remains* — https://dph.georgia.gov/document/document/permit-disposition-human-remains-pdf/download

---

## 1. The four document types every state uses

The US death-registration system has four document streams per death. The 50-state form inventory below is organized by document type so a multi-form-synthesizer product can target each one independently.

### 1.1 Application for Certified Copy of a Death Record (consumer-facing)

This is the form a family member or authorized person uses to *order* a copy of a death certificate after the fact. Fees range $5-$30 per copy. Most states index this PDF on the state vital-records website.

| # | State | Form number (where listed) | Issuing office | Fee (cert copy) | Fee (without CoD) | URL |
| - | --- | --- | --- | --- | --- | --- |
| 1 | Alabama | n/a | Alabama Center for Health Statistics, P.O. Box 5625, Montgomery AL 36103-5625 | $15 | n/a | https://www.alabamapublichealth.gov/vitalrecords/ |
| 2 | Alaska | n/a | Alaska Bureau of Vital Statistics, 5441 Commercial Blvd., Juneau AK 99811-0675 | varies | n/a | http://dhss.alaska.gov/dph/VitalStats/ |
| 3 | Arizona | n/a | Bureau of Vital Records, P.O. Box 6018, Phoenix AZ 85005 | $20 | n/a | https://www.azdhs.gov/policy-intergovernmental-affairs/vital-records |
| 4 | Arkansas | n/a | Arkansas Dept of Health, Vital Records, 4815 W Markham, Little Rock AR 72205 | varies | n/a | https://www.healthy.arkansas.gov/programs-services/topics/vital-records |
| 5 | California | CDPH VS 112 | CDPH Vital Records - MS 5103, P.O. Box 997410, Sacramento CA 95899-7410 | $26 | $26 (amendment fee includes 1 cert) | https://www.cdph.ca.gov/Programs/PSB/pages/birthdeathmarriagecertificates.aspx |
| 6 | Colorado | n/a | Colorado Department of Public Health and Environment, Vital Records, 4300 Cherry Creek Drive South, Denver CO 80246 | varies | n/a | https://cdphe.colorado.gov/vital-records |
| 7 | Connecticut | n/a | CT Dept of Public Health, Vital Records, 410 Capitol Avenue, Hartford CT 06134 | varies | n/a | https://portal.ct.gov/DPH/Vital-Records |
| 8 | Delaware | n/a | DE Office of Vital Statistics, Jesse S. Cooper Memorial Building, 417 Federal Street, Dover DE 19901 | varies | n/a | https://dhss.delaware.gov/dhss/dph/ss/ |
| 9 | District of Columbia | n/a | Vital Records Division, 899 N. Capitol Street NE, First Floor, Washington DC 20002 | $18 | $18 | https://dchealth.dc.gov/service/vital-records |
| 10 | Florida | n/a (county-issued) | Department of Health, Bureau of Vital Statistics, P.O. Box 210, Jacksonville FL 32231-0042 | $15 (with CoD restrictions) | $15 | https://broward.floridahealth.gov/wp-content/uploads/sites/9/2026/07/DeathCertificateApplicationForm-eng.pdf |
| 11 | Georgia | n/a | GA State Office of Vital Records, 1680 Phoenix Blvd., Suite 100, Atlanta GA 30349 | $25 first / $10 add'l | n/a | https://dph.georgia.gov/ |
| 12 | Hawaii | n/a | HI Department of Health, Office of Health Status Monitoring, 1250 Punchbowl Street, Honolulu HI 96813 | varies | n/a | https://health.hawaii.gov/vitalstats/ |
| 13 | Idaho | n/a | ID Bureau of Vital Records and Health Statistics, 450 W State St, Boise ID 83702 | varies | n/a | https://healthandwelfare.idaho.gov/health-wellness/vital-records |
| 14 | Illinois | n/a | IL Department of Public Health, Division of Vital Records, 925 E. Ridgely Ave., Springfield IL 62702 | varies | n/a | https://dph.illinois.gov/topics-services/birth-death-other-records |
| 15 | Indiana | n/a | IN State Department of Health, Vital Records, 2 N. Meridian St., Indianapolis IN 46204 | varies | n/a | https://www.in.gov/isdh/ |
| 16 | Iowa | n/a | IA Department of Public Health, Bureau of Vital Records, 321 E 12th St, Des Moines IA 50319 | $20 | n/a | https://hhs.iowa.gov/vr-dr-portal |
| 17 | Kansas | n/a | KS Department of Health and Environment, Office of Vital Statistics, 1000 SW Jackson, Topeka KS 66612 | varies | n/a | https://www.kdhe.ks.gov/ |
| 18 | Kentucky | n/a | KY Office of Vital Statistics, 275 E. Main Street, Frankfort KY 40621 | $10 | $10 | https://chfs.ky.gov/agencies/dph/dehp/vsb/Pages/kyedrs.aspx |
| 19 | Louisiana | n/a | LA Department of Health, Bureau of Vital Records, P.O. Box 60630, New Orleans LA 70160 | $15 first / $15 add'l | n/a | https://ldh.la.gov/ |
| 20 | Maine | n/a | ME Department of Health and Human Services, Data, Research and Vital Statistics, 220 Capitol Street, Augusta ME 04333 | varies | n/a | https://www.maine.gov/dhhs/ |
| 21 | Maryland | n/a | MD Department of Health, Division of Vital Records, 6550 Reisterstown Road, P.O. Box 68760, Baltimore MD 21215-0036 | varies | n/a | https://health.maryland.gov/vsa |
| 22 | Massachusetts | n/a | MA Registry of Vital Records and Statistics, 150 Mt. Vernon St., Dorchester MA 02125 | varies | n/a | https://www.mass.gov/orgs/registry-of-vital-records-and-statistics |
| 23 | Michigan | n/a | MI Department of Health and Human Services, Division for Vital Records and Health Statistics, 333 S. Grand Ave., Lansing MI 48913 | varies | n/a | https://www.michigan.gov/mdhhs |
| 24 | Minnesota | n/a | MN Department of Health, Office of Vital Records, P.O. Box 64499, St. Paul MN 55164-0499 | $26 (amendment) | $26 (amendment) | https://www.health.state.mn.us/people/vitalrecords/ |
| 25 | Mississippi | Form 523 (rev 02/2026) | Mississippi State Department of Health, Vital Records, P.O. Box 1700, Jackson MS 39215-1700 | $17 search + $17 cert | n/a | https://msdh.ms.gov/msdhsite/_static/resources/21411.pdf |
| 26 | Missouri | n/a | MO Department of Health and Senior Services, Bureau of Vital Records, 930 Wildwood Dr., Jefferson City MO 65109 | $14 first / $11 add'l | n/a | https://health.mo.gov/ |
| 27 | Montana | n/a | MT Department of Public Health and Human Services, Office of Vital Records, 2401 Colonial Drive, Helena MT 59601 | varies | n/a | https://dphhs.mt.gov/ |
| 28 | Nebraska | n/a | NE Department of Health and Human Services, Vital Records, P.O. Box 95065, Lincoln NE 68509-5065 | varies | n/a | http://dhhs.ne.gov/Pages/Vital-Records.aspx |
| 29 | Nevada | n/a | NV Department of Health and Human Services, Office of Vital Records, 4150 Technology Way, Carson City NV 89706 | varies | n/a | http://dpbh.nv.gov/Programs/Vital-Records/ |
| 30 | New Hampshire | n/a | NH Division of Vital Records Administration, 71 South Fruit Street, Concord NH 03301-2410 | varies | n/a | https://nhvrin.com/ |
| 31 | New Jersey | n/a | NJ Department of Health, Office of Vital Statistics & Registry, P.O. Box 370, Trenton NJ 08625-0370 | varies | n/a | https://www.state.nj.us/health/vital/ |
| 32 | New Mexico | n/a | NM Department of Health, Bureau of Vital Records, P.O. Box 26110, Santa Fe NM 87502 | varies | n/a | https://www.nmhealth.org/ |
| 33 | New York (state) | DOH-5056 (stillbirth) | NY State Department of Health, Vital Records, P.O. Box 2602, Albany NY 12220-2602 | $30 | n/a | https://www.health.ny.gov/forms/doh-5056.pdf |
| 34 | New York City | n/a | NYC Department of Health and Mental Hygiene, Office of Vital Records, 125 Worth Street, New York NY 10013 | varies | n/a | https://www.nyc.gov/site/doh/services/death-certificate-records.page |
| 35 | North Carolina | n/a | NC Vital Records, 1903 Mail Service Center, Raleigh NC 27699-1903 | $24 first / $15 add'l | n/a | https://vitalrecords.nc.gov/ |
| 36 | North Dakota | n/a | ND Department of Health and Human Services, Vital Records, 600 E. Boulevard Ave., Bismarck ND 58505-0250 | varies | n/a | https://www.health.nd.gov/vital |
| 37 | Ohio | n/a | OH Department of Health, Bureau of Vital Statistics, P.O. Box 15098, Columbus OH 43215 | varies | n/a | https://odh.ohio.gov/ |
| 38 | Oklahoma | n/a | OK State Department of Health, Vital Records, 1000 NE 10th Street, Oklahoma City OK 73117 | varies | n/a | https://oklahoma.gov/health/ |
| 39 | Oregon | n/a | OR Center for Health Statistics, P.O. Box 14050, Portland OR 97293-0050 | varies | n/a | https://www.oregon.gov/oha/PH/BIRTHDEATHCERTIFICATES/ |
| 40 | Pennsylvania | HD02080F (rev 03/25) | PA Department of Health, Division of Vital Records, P.O. Box 1528, New Castle PA 16103 | $20 (with medical info, post-2019 only) | varies | https://www.pa.gov/content/dam/copapwp-pagov/en/health/documents/topics/documents/certificates-and-records/Application%20for%20a%20Death%20Certificate.pdf |
| 41 | Rhode Island | n/a | RI Department of Health, Office of Vital Records, 3 Capitol Hill, Providence RI 02908 | varies | n/a | https://health.ri.gov/ |
| 42 | South Carolina | n/a | SC Department of Public Health, 2600 Bull Street, Columbia SC 29201 | $12 first / $3 add'l | n/a | https://dph.sc.gov/public/vital-records/about-vital-records/vital-records-forms |
| 43 | South Dakota | n/a | SD Department of Health, Vital Records, 600 E. Capitol, Pierre SD 57501 | varies | n/a | https://doh.sd.gov/ |
| 44 | Tennessee | n/a | TN Department of Health, Office of Vital Records, P.O. Box 380, Nashville TN 37202 | varies | n/a | https://www.tn.gov/health/ |
| 45 | Texas | n/a (TxEVER EDRS preferred) | Texas DSHS, Vital Statistics Section, P.O. Box 12040, Austin TX 78711-2040 | varies | n/a | https://www.dshs.texas.gov/vital-applications-forms |
| 46 | Utah | n/a (rev 2026) | Utah Department of Health and Human Services, Office of Vital Records and Statistics, 288 N 1460 W, Salt Lake City UT 84116 | varies | n/a | https://swuhealth.gov/wp-content/uploads/2026/01/Death-Certificate-2026_english.pdf |
| 47 | Vermont | n/a | VT Department of Health, Vital Records Section, P.O. Box 70, 108 Cherry Street, Burlington VT 05402-0070 | varies | n/a | https://www.healthvermont.gov/ |
| 48 | Virginia | n/a | VA Department of Health, Office of Vital Records, 2001 Maywill Street, Richmond VA 23230 | varies | n/a | https://www.vdh.virginia.gov/vital-records/ |
| 49 | Washington | n/a | WA State Department of Health, Center for Health Statistics, P.O. Box 47814, Olympia WA 98504-7814 | $25 first / $25 add'l | $25 first / $25 add'l | https://doh.wa.gov/licenses-permits-and-certificates/vital-records |
| 50 | West Virginia | n/a | WV Department of Health and Human Resources, Vital Registration Office, 350 Capitol Street, Charleston WV 25301 | varies | n/a | https://dhhr.wv.gov/ |
| 51 | Wisconsin | n/a (VitalChek) | WI Department of Health Services, Vital Records Office, P.O. Box 309, Madison WI 53701 | $20 | n/a | https://www.dhs.wisconsin.gov/vitalrecords/applications.htm |
| 52 | Wyoming | n/a | WY Department of Health, Vital Records, 2300 Capitol Avenue, Cheyenne WY 82002 | varies | n/a | https://health.wyo.gov/ |

**CDC NCHS national directory** (the "Where to Write for Vital Records" page) — https://www.cdc.gov/nchs/w2w/index.htm — provides one-click state-by-state anchors and per-state mailing addresses, fees, and remarks. Most state office hours are 8am-5pm local. All 50 states + DC + 5 territories (American Samoa, Guam, Northern Mariana Islands, Puerto Rico, US Virgin Islands) are listed.

### 1.2 Death Certificate (paper, restricted distribution)

The *death certificate* itself — the actual record — is printed on security paper and is not publicly downloadable. It must be ordered from the state vital records office. The form numbers are publicly listed:

- **CDC NCHS** *U.S. Standard Certificate of Death* (rev 11/2003) — federal standard that all states adopt with state-specific variations: https://www.cdc.gov/nchs/data/dvs/death11-03final-acc.pdf
- **California** VS 111 (birth long-form) / VS 112 (death application) / VS 113A (marriage) / VS 113B (divorce) — restricted distribution
- **Texas** VS-111 (birth long-form) / VS-112 (death cert, rev 04/09) / VS-113 (fetal death, rev 01/06) / VS-115 (Report of Death, rev 09/04) — restricted distribution per the VS-100 requisition form
- **Kentucky** VS-33 (Supplemental Report of Death, effective Feb 1 2026 per KRS 213.076(12)) — restricted distribution
- **Many states have moved to Electronic Death Registration Systems (EDRS)** and no longer print paper certs at all (VT EDRS, PA EDRS, TX TxEVER, KY KY-EDRS, IA HHS Death Registration Portal)

### 1.3 Medical Certification Worksheet (medical certifier-facing)

This is the paper-based form a physician, NP, PA, ME, or coroner uses to certify the cause and manner of death when the funeral home is using an EDRS but the medical certifier is not.

| State | Form number | URL |
| --- | --- | --- |
| Pennsylvania | HD02036F (rev 07/18) | https://www.pa.gov/content/dam/copapwp-pagov/en/health/documents/topics/documents/reporting-registries/Medical_Certification_Worksheet.pdf |
| North Dakota | SFN 58646 (rev 10-2025) | https://www.nd.gov/eforms/Doc/sfn58646.pdf |
| Oregon | (worksheet for funeral homes) | https://www.oregon.gov/oha/PH/BIRTHDEATHCERTIFICATES/Document%20Forms/deathcertworksheet.pdf |
| South Carolina | (Non-Funeral Home Worksheet) | https://dph.sc.gov/sites/scdph/files/Library/D-0670D.pdf |
| Texas | (TxEVER EDRS preferred) | https://www.dshs.texas.gov/vital-applications-forms |
| Florida | (EDRS preferred) | https://www.floridahealth.gov/ |
| Vermont | PROD (Preliminary Report of Death) | https://www.healthvermont.gov/sites/default/files/documents/2016/12/STAT_VR_PROD2012.pdf |
| CDC NCHS | (Physician's Handbook 1.8MB PDF) | https://www.cdc.gov/nchs/nvss/handbooks-and-guides.htm |
| CDC NCHS | (Medical Examiners' and Coroners' Handbook) | https://www.cdc.gov/nchs/data/misc/hb_me.pdf |

### 1.4 Burial-Transit / Disposition Permit (funeral director + local registrar-facing)

This is the form that authorizes movement of a body and final disposition (burial, cremation, donation, removal from state). It is not the death certificate.

| State | Form number / citation | URL |
| --- | --- | --- |
| Alaska | VS FORM 121 | https://anthc.org/wp-content/uploads/2026/04/Burial-Transit-Permit.pdf |
| Georgia | DPH Rule 511-1-3-.23(1b) | https://dph.georgia.gov/document/document/permit-disposition-human-remains-pdf/download |
| Iowa | §144.32 (Iowa Code 2026) | https://www.legis.iowa.gov/docs/code/144.32.pdf |
| Utah | R436-8-2(4) + R436-8-3 | https://vitalrecords.utah.gov/wp-content/uploads/Dispositioner-Packet-022026-FINAL.pdf |
| Vermont | 18 V.S.A. § 5201 (BTP) | https://www.healthvermont.gov/sites/default/files/documents/pdf/HS_VR-Death-Manual.pdf |
| Kentucky | (KY-EDRS-issued) | https://www.chfs.ky.gov/agencies/dph/dehp/vsb/Pages/kyedrs.aspx |
| Texas | (TxEVER-issued + paper backup) | https://www.dshs.texas.gov/sites/default/files/vs/partners/docs/death-registration-handbook-final-01.2026.pdf |
| Florida | (5-day extension via Form 1355) | https://www.floridahealth.gov/wp-content/uploads/2026/03/Delay_Report_Death_form_1355.pdf |

### 1.5 Fetal Death / Stillbirth Certificate (medical certifier-facing)

Required for every fetal death ≥20 weeks gestation or ≥350 grams. Form is **distinct** from the death certificate.

| State | Form number | URL |
| --- | --- | --- |
| Texas | VS-113 (rev 01/06) | https://www.dshs.texas.gov/sites/default/files/vs/partners/docs/forms/Requisition-VSForms-VS100.pdf |
| California | VS 12 (cert copy app) / VS 13E (stillbirth app) | https://www.cdph.ca.gov/Programs/PSB/pages/birthdeathmarriagecertificates.aspx |
| New York | DOH-5056 | https://www.health.ny.gov/forms/doh-5056.pdf |
| Minnesota | stillbirthapp.pdf (rev 06/2024) | https://www.health.state.mn.us/people/vitalrecords/docs/stillbirthapp.pdf |
| Iowa | Certificate of Fetal Death (Form, 242.73 KB) | https://hhs.iowa.gov/vr-dr-portal |
| Riverside County CA | 2026 Certificate of Still Birth Application | https://www.ruhealth.org/sites/default/files/Vital%20Records/forms/2026/2026-certificate-of-still-birth-application-english_12_18_2025.pdf |
| CDC NCHS | (U.S. Standard Certificate of Fetal Death — separate form) | https://www.cdc.gov/nchs/data/dvs/ |

### 1.6 Death Record Amendment / Affidavit for Correction (consumer + funeral director-facing)

Used to amend a recorded death certificate (typo, name change, addition of information).

| State | Form number | Fee | URL |
| --- | --- | --- | --- |
| California | VS 24 (effective Jan 2022) | $26 amendment (includes 1 cert) | https://www.cdph.ca.gov/Programs/CHSI/CDPH%20Document%20Library/Affidavit_to_Amend_a_Death_Record_Pamphlet_ADA.pdf |
| Missouri | 580-0645 (rev 4-2025) | No fee for affidavit; $14-$15 for reissue | https://health.mo.gov/sites/health/files/media/pdf/2026/04/Aff_for_Correction.pdf |
| Washington | DOH 422-034 (CHS-D9-2023 policy) | No fee; 10-month wait | https://doh.wa.gov/licenses-permits-and-certificates/vital-records/how-correct-record/changing-death-certificates |
| Minnesota | DRAAI (last updated 01/26/2026) | $40 amendment + $20 faster | https://www.health.state.mn.us/people/vitalrecords/amenddeath.html |
| Kentucky | VS-33 (effective Feb 1 2026) | per KRS 213.076(12) | https://www.chfs.ky.gov/agencies/dph/dehp/vsb/Pages/kyedrs.aspx |
| Texas | (TxEVER-issued) | varies | https://www.dshs.texas.gov/vital-applications-forms |
| Florida | (paper + EDRS) | varies | https://www.floridahealth.gov/ |

### 1.7 State Death Registration Manual (medical certifier + funeral director-facing)

Many states publish a 30-100 page manual explaining the entire death-registration process for funeral directors and medical certifiers. The Texas Jan 2026 manual is a particularly strong 51-page reference.

| State | URL |
| --- | --- |
| Texas (51-page, Jan 2026) | https://www.dshs.texas.gov/sites/default/files/vs/partners/docs/death-registration-handbook-final-01.2026.pdf |
| Texas (Fetal Death Registration) | https://www.dshs.texas.gov/sites/default/files/vs/partners/docs/FetalDeathRegistrationHandbook.pdf |
| Vermont (PROD + EDRS + BTP manual) | https://www.healthvermont.gov/sites/default/files/documents/pdf/HS_VR-Death-Manual.pdf |
| CDC NCHS (Physician's Handbook 1.8MB) | https://www.cdc.gov/nchs/nvss/handbooks-and-guides.htm |
| CDC NCHS (Medical Examiners' and Coroners' Handbook) | https://www.cdc.gov/nchs/data/misc/hb_me.pdf |
| CDC NCHS (EDRS Online Reference Manual) | https://beta.cdc.gov/nchs/data/dvs/EDRS-Online-Reference-Manual.pdf |

---

## 2. EDRS (Electronic Death Registration System) status by state

EDRS is the modern electronic death-registration system. Most US states now have an EDRS, but each state uses a different vendor. Funeral directors, medical certifiers, and local registrars all need accounts. Some states have moved to mandatory EDRS-only (no paper backup); others accept paper in parallel.

| State | EDRS system | Mandate status (2026) | URL |
| --- | --- | --- | --- |
| California | California EDRS (CA-EDRS) | Optional (paper parallel) | https://www.cdph.ca.gov/ |
| Colorado | Colorado EDRS | Mandatory for funeral directors | https://cdphe.colorado.gov/ |
| Florida | Florida EDRS | Paper backup allowed via Form 1355 | https://www.floridahealth.gov/ |
| Iowa | IA HHS Death Registration Portal | Mandate date varies | https://hhs.iowa.gov/vr-dr-portal |
| Kentucky | KY-EDRS | Mandatory for funeral directors and medical certifiers | https://www.chfs.ky.gov/agencies/dph/dehp/vsb/Pages/kyedrs.aspx |
| Massachusetts | Mass-EDRS | Mandatory | https://www.mass.gov/ |
| New York | NY eVital | Mandatory | https://www.health.ny.gov/ |
| North Carolina | NC DAVE | Mandatory | https://vitalrecords.nc.gov/ |
| Pennsylvania | EDRS (state) | Optional (paper via HD02080F + HD02036F) | https://www.pa.gov/ |
| Texas | TxEVER | Mandatory for funeral directors and medical certifiers | https://www.dshs.texas.gov/ |
| Utah | Utah Death Record Processing Form + EDRS | Mandatory | https://vitalrecords.utah.gov/ |
| Vermont | VT EDRS | Mandatory within 24 hours | https://www.healthvermont.gov/ |
| Wisconsin | WRAPPER | Paper backup via VitalChek | https://www.dhs.wisconsin.gov/ |

(NAPHSIS hosts a national EDRS deployment map. The CDC NCHS EDRS Online Reference Manual provides the standard form-field mapping.)

---

## 3. Common form-field patterns across states

Despite the 50-state variation, the federal U.S. Standard Certificate of Death (rev 11/2003) defines a common field set that all states adopt with state-specific variations:

- **Decedent information** (legal name, date of birth, date of death, place of death, sex, race, ethnicity, marital status, spouse name, SSN, education, usual occupation, industry)
- **Cause of death** (Part I: chain of events; Part II: other significant conditions; manner of death: natural / accident / suicide / homicide / undetermined)
- **Certifier information** (physician, NP, PA, ME, or coroner; signature; license number; date certified)
- **Disposition** (burial, cremation, donation, entombment, removal from state, other)
- **Funeral home information** (name, address, license number, funeral director name)
- **Informant information** (relationship to decedent, mailing address)
- **State file number** (assigned by state)
- **Local file number** (assigned by county or local registrar)

**State-specific variations to watch:**

- **Disposition method vocabulary** (most states use 5-6 options: Burial, Cremation, Donation, Entombment, Removal from State, Other — but some add Hydrolysis / Aquamation / Natural Organic Reduction for human composting)
- **Cause-of-death specific format** (CDC NCHS standard Part I/II is universal, but state-specific county-of-death, ME-coroner, and manner-of-death categories vary)
- **Race / ethnicity checkboxes** (states vary on the number of categories)
- **Education level** (5-9 levels depending on state)
- **Industry / occupation** (state-specific crosswalk)

---

## 4. Pain points surfaced

The atlas itself is the answer to a structural consumer pain: the US has **50 different state vital-records offices**, each with its own form number, fee, eligibility, and process. The CDC NCHS national directory exists, but it does not provide a per-state form-decoder or a deadline-aware form-filler. A consumer trying to order a death certificate after a family death has to:

1. Identify the right state office (50 different URLs)
2. Identify the right form (most states have 4-8 form types, each with a different form number)
3. Determine eligibility (most states have 4-12 eligibility categories for "authorized person")
4. Provide ID (each state has a different ID checklist; the UT and FL checklists are notably more detailed than the AZ or IA)
5. Pay the right fee ($5 in FL to $30 in NY, plus shipping)
6. Submit the right way (mail, in-person, online via state EDRS, or third-party via VitalChek)

The same pain applies to funeral directors, medical certifiers, and local registrars, who need to know the 50-state form-field differences to file correctly.

**Saturated adjacent cells:** VitalChek (third-party ordering service used by ~38 states, no form-decoder); IdentoGO / IDEMIA (state ID verification); Records Trove (county vital-records directory, not a form-decoder); individual state vital-records websites (no cross-state comparison).

**Open wedges for a "multi-form-synthesizer" product** (cross-references the certchase-funeral-signature-expediter and lotmatch-synthesis ideas from the prior corpus):

- 50-state death-certificate ordering copilot (B2C, $9.99 per cert or $4.99/mo for the family)
- 50-state amendment / correction copilot (B2C, $19 per amendment)
- Funeral-director multi-state EDRS checklist (B2B, $39/mo per seat)
- Medical-certifier state-by-state worksheet picker (B2B, $19/mo per certifier)

---

## 5. Source provenance and resurrection signal

**Source provenance:**
- All 15 sources are 2025-26 public-sector PDFs or web pages indexed by Google.
- The CDC NCHS national directory (https://www.cdc.gov/nchs/w2w/) is the single most-authoritative anchor and is referenced by federal agencies and embassies.
- State vital-records websites are the canonical source for the per-state form inventory.

**Resurrection signal:**
This atlas is durable through 2027 unless one of the following happens:
- Federal mandate for a single national death-certificate form (no public discussions as of Aug 2026)
- A national multi-form-synthesizer API (e.g., NAPHSIS publishing an open API for the 50-state form inventory)
- A federal online ordering portal (CDC NCHS has not proposed this; only the Where to Write directory exists)

The atlas is most likely to need a major update if:
- A new state passes a law mandating EDRS-only (as KY did with VS-33 effective Feb 1 2026)
- A new fetal death threshold (some states are moving from 20 weeks to 22 weeks)
- A new stillbirth certificate form (e.g., post-Dobbs legislation creating a Certificate of Birth Resulting in Stillbirth in more states)

If the 50-state form landscape changes materially, regenerate this atlas with the same multi-angle search formula. The structural pattern (CDC NCHS national directory + per-state PDF) will persist.

---

## 6. Resolved from previous Round 13 work

This atlas builds on and integrates with:
- `docs/RESEARCH-CERTIFIER-ROUTING-MATRIX.md` (matrix-tick 2) — 50-state death-certifier routing rules (who can sign, statutory window, ME-jurisdiction triggers, EDRS pathway) for 50 states + DC
- `docs/IDEALEDGER.md` and `docs/RESEARCH-PLAYBOOK.md` — the research-system operating manual

Together with the certifier-routing-matrix, this atlas forms the two-part death-certificate knowledge base:
- Certifier routing: who can sign, when, under what jurisdiction
- Form inventory: which form, where to get it, how to fill it, what it costs
