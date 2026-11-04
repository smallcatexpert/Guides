# Media player compatibility

Community-tested results imported from `What does my Media Player Support.xlsx`. Values and cell notes are preserved from the workbook; they are not guarantees for every firmware version or setup. Read the linked notes before choosing a player.

This sheet will only covers Player/Product that can run the Plex client direct/in-direct (JF/Emby isn't covered yet in this sheet because of the lack of proper tautulli app, and feedback/info from users)

Do you see a missing Player/Product ? and are you able to provide the needed info please join TRaSH Guides Discord

[Join TRaSH Guides Discord](https://trash-guides.info/discord). See [how to submit player results](what-does-my-media-player-support.md) for the required test information.

## Legend

| Value | Meaning |
| --- | --- |
| N | No |
| Y | Yes |
| ? | No Test Results |
| [^A6] | Notes/Extra Info |

A linked number identifies a cell note. A blank cell stays blank; `?` means no test results, not a negative result.

## Source profiles

| Source | Profile | Extra information |
| --- | --- | --- |
| WEBDL | Profile 5 or 8 | Where P5 doesn't have Fallback to HDR10[^I3] |
| WEBDL Hybrid (DV HDR10/HDR10+) | Profile 8 | |
| Encode | Profile 8 | |
| Remux | Profile 7 | |
| Remux Hybrid (DV Layer from WEBDL) | Profile 8 | |
| BR-DISK | Profile 7 | |

## Tested players

HDR Formats[^C10] (DV P5 through HDR10+). Audio Passthrough[^H10] (TrueHD ATMOS through DD/AC3).

| Player | Product | DV P5[^C11] | DV P7[^D11] | DV P8[^E11] | HDR10 | HDR10+[^G11] | TrueHD ATMOS | DTS X | DD+ ATMOS | TrueHD | DTS-HD MA | FLAC/PCM | DD+/E-AC3 | DTS | AAC | DD/AC3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AFTKM (Amazon Fire TV Stick 4K (Gen 2))[^A12] | Plex for Android (TV) | Y | Y | Y | Y | Y[^G12] | Y | N[^I12] | Y | Y | N[^L12] | Y | Y | Y | Y | Y |
| Apple TV (4K)[^A13] | Plex for Apple TV | Y | N[^D13] | N[^E13] | Y | N[^G13] | N[^H13] | N[^I13] | N[^J13] | N[^K13] | N[^L13] | Y | N[^N13] | N[^O13] | Y | N[^Q13] |
| Apple TV (4K)[^A14] | Infuse | Y | N[^D14] | Y | Y | N[^G14] | N[^H14] | N[^I14] | Y | N[^K14] | N[^L14] | Y | Y | N[^O14] | Y | N[^Q14] |
| Apple TV (4K) 2nd Gen | Plex for Apple TV | Y | N[^D15] | N[^E15] | Y | N[^G15] | N[^H15] | N[^I15] | N[^J15] | N[^K15] | N[^L15] | Y | Y | N[^O15] | Y | N[^Q15] |
| Apple TV (4K) 2nd Gen | Infuse | Y | N[^D16] | Y | Y | N[^G16] | N[^H16] | N[^I16] | Y | N[^K16] | N[^L16] | Y | Y | N[^O16] | Y | N[^Q16] |
| Apple TV (4K) 3rd Gen | Plex for Apple TV | Y | N[^D17] | N[^E17] | Y | Y | N[^H17] | N[^I17] | N[^J17] | N[^K17] | N[^L17] | Y | Y | N[^O17] | Y | N[^Q17] |
| Apple TV (4K) 3rd Gen | Infuse | Y | N[^D18] | Y | Y | Y | N[^H18] | N[^I18] | Y | N[^K18] | N[^L18] | Y | Y | N[^O18] | Y | N[^Q18] |
| Chromecast Google TV[^A19] | Plex for Android (TV) | Y | N[^D19] | Y | Y | ?[^G19] | N[^H19] | N[^I19] | Y | N[^K19] | Y | Y | Y | Y | Y | Y |
| Homatics R 4k Plus[^A20] | PlexKodiConnect | Y | Y[^D20] | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Kodi LG webOSTV[^A21] | PlexKodiConnect | Y | Y | Y | Y | N[^G21] | Y | ? | Y | ? | Y | Y | Y | ? | Y | ? |
| LG OLED65CX6LA[^A22] | Plex for LG | N[^C22] | N[^D22] | N[^E22] | Y | N[^G22] | N[^H22] | N[^I22] | Y | Y[^K22] | N[^L22] | Y[^M22] | Y | N[^O22] | Y | Y |
| Roku Ultra 4640x[^A23] | Plex for Roku | N | N[^D23] | N[^E23] | Y | ?[^G23] | N[^H23] | ? | Y | N[^K23] | N[^L23] | ? | Y | ? | Y | Y |
| SHIELD Android TV (2015) | Plex for Android (TV) | N | N | N | Y | N[^G24] | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| SHIELD Android TV (2017) | Plex for Android (TV) | N | N | N | Y | N[^G25] | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| SHIELD Android TV (2019) (Pro)[^A26] | Plex for Android (TV) | Y | Y[^D26] | Y | Y | N[^G26] | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| SHIELD Android TV (2019) (Pro)[^A27] | PlexKodiConnect | Y | Y | Y | Y | N[^G27] | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Ugoos AM6B+[^A28] | Kodi (PM4K) | Y | Y[^D28] | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Zidoo/Z9X PRO[^A29] | plex2zidoo (PM4K) | Y | Y | Y | Y | Y | Y[^H29] | Y[^I29] | Y | Y[^K29] | Y[^L29] | Y | Y | Y | Y | Y |

## Template row

The workbook includes this untested placeholder. It is retained separately from the tested devices.

| Player | Product | DV P5 | DV P7 | DV P8 | HDR10 | HDR10+ | TrueHD ATMOS | DTS X | DD+ ATMOS | TrueHD | DTS-HD MA | FLAC/PCM | DD+/E-AC3 | DTS | AAC | DD/AC3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PLAYER | PRODUCT | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? |

## Updating results

Edit this page using the pencil icon or GitHub’s file editor. Each table line is one player/product combination, with values in the same order as the headings. Keep `Y`, `N`, `?`, and blank cells distinct. Copy a row to add a device, then update its name, product, and results.

Keep qualifications next to their results using a footnote reference such as `N[^device-dv]` and a matching definition such as `[^device-dv]: Falls back to HDR10.` below the table. Existing footnote names refer to the original workbook cell for migration traceability; new notes can use descriptive names. Include test dates and evidence links where available, and keep contradictory or uncertain findings explicit. Preview the page before submitting a pull request.

This Markdown page is the editable source of truth. No spreadsheet export or regeneration is needed.

<!-- Imported from Sheet1; workbook SHA-256: 51a5c35aca4f9b04c50356811aca03ce7241ad5b479b816b980e8b06a4ee215e. -->

[^I3]: Profile 5 does not have a HDR10 baselayer, so cannot fallback to HDR10

[^A6]: Notes/Extra Info

[^C10]: We decided to go for the most common used HDR Formats.<br>This includes the common Dolby Vision profiles and HDR10/HDR10+

[^H10]: This allows for the best audio quality as the audio signal is not altered or compressed in any way before reaching the AV receiver or soundbar. This is especially important for high-quality audio formats such as Dolby TrueHD or DTS-HD Master Audio.<br><br>By using audio passthrough, you can ensure that you are getting the best audio experience possible when watching movies or listening to music through your home theater system. It allows you to take full advantage of the capabilities of your AVR/Soundbar and ensures that you are hearing the audio as it was intended to be heard by the content creators.<br><br>Overall, audio passthrough is the ideal way to send audio from your media server to your AV receiver or soundbar for the highest quality audio experience.

[^C11]: DV Profile 5.<br>This is what comes with WEB-DL Dolby Vision releases without HDR10 fallback.<br>(Incompatible devices will playback with blown out pinks and greens)

[^D11]: DV Profile 7<br>This is what comes with UHD Bluray Remuxes and UHD BluRay releases.<br>These files will play on an Nvidia Shield Pro (2019), but on most other players will revert to the HDR10 fallback.

[^E11]: DV Profile 8<br>This is what comes with (Hybrid) WEB-DL (HULU), Hybrid UHD Remux, and UHD BluRay releases (all of which have HDR10 fallback).<br>This works with several mainstream media players.

[^G11]: HDR10+ content backward compatible with non-HDR10+ TVs/Devices. HDR10+ metadata is ignored by devices that do not support the format and video is played back in HDR10.

[^A12]: Test Result Provided by: DoonGuy<br>Test Result: <https://discord.com/channels/492590071455940612/1242251198673846442>

[^G12]: HDR10+ video files with a height NOT divisible by 16 will not decode correctly.<br><https://www.amazonforum.com/s/question/0D56Q0000CLUXxzSQH/hdr10-video-files-with-a-height-not-divisible-by-16-will-not-decode-correctly>

[^I12]: FIRE STICK ITSELF TRANSCODES TO DTS 5.1! I would consider this format unsupported!

[^L12]: FIRE STICK ITSELF TRANSCODES TO DTS 5.1! I would consider this format unsupported!

[^A13]: Test results provided by: MvB<br>Test Results: <https://discord.com/channels/492590071455940612/1227314280857342023><br>Date of Test: April 2024<br><br>other sources:<br>Infuse forum, and several other sources like reddit and plex forum

[^D13]: The Apple TV doesn't support Profile 7, according to several sources including the Infuse forum. They mention that it actually falls back to HDR10, but your TV will trigger Dolby Vision (DV). This is often referred to as fake DV.<br>Fake DV = Triggers DV on your devices but you're actually playing the HDR10 base layer.<br><br>However, one of our team members tested it and his setup triggered DV on his TV and his AVR. We can't say for sure if this is fake DV or real DV.

[^E13]: The Apple TV doesn't support Profile 8, according to several sources including the Infuse forum. They mention that it actually falls back to HDR10, but your TV will trigger Dolby Vision (DV). This is often referred to as fake DV.<br><br>However, one of our team members tested it and his setup triggered DV on his TV and his AVR. We can't say for sure if this is fake DV or real DV.

[^G13]: Will fallback to HDR10

[^H13]: TrueHD is transcoded to Opus/FLAC (Atmos metadata is discarded)

[^I13]: Decodes DTS Core to LPCM

[^J13]: Decodes to PCM(Atmos metadata is discarded)

[^K13]: TrueHD is transcoded to Opus/FLAC (Atmos metadata is discarded)

[^L13]: Decodes DTS Core to LPCM

[^N13]: Decodes to  LPCM

[^O13]: Decodes DTS Core to LPCM

[^Q13]: Decodes to PCM

[^A14]: Test results provided by: MvB<br>Test Results: <https://discord.com/channels/492590071455940612/1227314280857342023><br>Date of Test: April 2024<br><br>other sources:<br>Infuse forum, and several other sources like reddit and plex forum

[^D14]: The Apple TV doesn't support Profile 7, according to several sources including the Infuse forum. They mention that it actually falls back to HDR10

[^G14]: Will fallback to HDR10

[^H14]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^I14]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^K14]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^L14]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^O14]: Decoded to LPCM

[^Q14]: Decoded to LPCM

[^D15]: The Apple TV doesn't support Profile 7, according to several sources including the Infuse forum. They mention that it actually falls back to HDR10, but your TV will trigger Dolby Vision (DV). This is often referred to as fake DV.<br>Fake DV = Triggers DV on your devices but you're actually playing the HDR10 base layer.<br><br>However, one of our team members tested it and his setup triggered DV on his TV and his AVR. We can't say for sure if this is fake DV or real DV.

[^E15]: The Apple TV doesn't support Profile 8, according to several sources including the Infuse forum. They mention that it actually falls back to HDR10, but your TV will trigger Dolby Vision (DV). This is often referred to as fake DV.<br><br>However, one of our team members tested it and his setup triggered DV on his TV and his AVR. We can't say for sure if this is fake DV or real DV.

[^G15]: Will fallback to HDR10

[^H15]: TrueHD is transcoded to Opus/FLAC (Atmos metadata is discarded)

[^I15]: Decodes DTS Core to LPCM

[^J15]: Decodes to PCM(Atmos metadata is discarded)

[^K15]: TrueHD is transcoded to Opus/FLAC (Atmos metadata is discarded)

[^L15]: Decodes DTS Core to LPCM

[^O15]: Decodes DTS Core to LPCM

[^Q15]: Decodes to PCM

[^D16]: The Apple TV doesn't support Profile 7, according to several sources including the Infuse forum. They mention that it actually falls back to HDR10

[^G16]: Will fallback to HDR10

[^H16]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^I16]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^K16]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^L16]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^O16]: Decoded to LPCM

[^Q16]: Decoded to LPCM

[^D17]: The Apple TV doesn't support Profile 7, according to several sources including the Infuse forum. They mention that it actually falls back to HDR10, but your TV will trigger Dolby Vision (DV). This is often referred to as fake DV.<br>Fake DV = Triggers DV on your devices but you're actually playing the HDR10 base layer.<br><br>However, one of our team members tested it and his setup triggered DV on his TV and his AVR. We can't say for sure if this is fake DV or real DV.

[^E17]: The Apple TV doesn't support Profile 8, according to several sources including the Infuse forum. They mention that it actually falls back to HDR10, but your TV will trigger Dolby Vision (DV). This is often referred to as fake DV.<br><br>However, one of our team members tested it and his setup triggered DV on his TV and his AVR. We can't say for sure if this is fake DV or real DV.

[^H17]: TrueHD is transcoded to Opus/FLAC (Atmos metadata is discarded)

[^I17]: Decodes DTS Core to LPCM

[^J17]: Decodes to PCM(Atmos metadata is discarded)

[^K17]: TrueHD is transcoded to Opus/FLAC (Atmos metadata is discarded)

[^L17]: Decodes DTS Core to LPCM

[^O17]: Decodes DTS Core to LPCM

[^Q17]: Decodes to PCM

[^D18]: The Apple TV doesn't support Profile 7, according to several sources including the Infuse forum. They mention that it actually falls back to HDR10

[^H18]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^I18]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^K18]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^L18]: Audio is converted losslessly to LPCM, but spatial metadata (i.e. Atmos or DTS:X) is discarded. No audio fidelity loss compared to source audio.

[^O18]: Decoded to LPCM

[^Q18]: Decoded to LPCM

[^A19]: Test Result Provided by: TRaSH<br>Test Result: <https://discord.com/channels/492590071455940612/1238791066786857041>

[^D19]: Will fallback to HDR10

[^G19]: The TV Tested doesn't support HDR10+ so it will fallback to HDR10

[^H19]: AUDIO: Transcode (TrueHD 7.1  =&gt; OPUS 7.1)<br>Plex Playback Info: Transcode Reason TrueHD audio is not supported by the device

[^I19]: - Direct Play DCA 7.1)<br>Plex Playback Info: Direct Play (DTS-HD 7.1)

[^K19]: - Transcode (TrueHD 7.1 =&gt; OPUS 7.1)<br>- Plex Playback Info: Transcode Reason TrueHD audio is not supported by the device

[^A20]: Test results provided by: sek<br>Test Results: <https://discord.com/channels/492590071455940612/1293673285527011388><br>Date of Test: October 2024<br><br>Suppose you want a box that can run premium Android applications and CoreELEC. In that case, the best overall device is the Homatics Box R 4k Plus with its support for Dolby Vision including FEL and AV1 with a certified Android TV box. However, CoreELEC will run slower than the Ugoos and may not be able to decode some older Blu-ray movies as it does not support the VC1 codec.

[^D20]: Can play both FEL and MEL DV P7 as well Single Track and Dual Track

[^A21]: Test Result Provided by: Jimbo<br>Test Result: <https://discord.com/channels/492590071455940612/1237182040319987784><br>TV: LG C3

[^G21]: Will fallback to HDR10

[^A22]: Test Result Provided by: TRaSH<br>Test Result: <https://discord.com/channels/492590071455940612/1235664786717671545>

[^C22]: TV triggers DV, but picture is Purple and green

[^D22]: Will fallback to HDR10

[^E22]: Will fallback to HDR10

[^G22]: Will fallback to HDR10

[^H22]: Transcode (TrueHD 7.1 =&gt; EAC3 7.1)

[^I22]: - Transcode (DCA 7.1 =&gt; AAC 5.1)<br>- Plex LG Video Settings Force Direct Play Disabled else no audio

[^K22]: - Plex LG Video Settings Force Direct Play Enabled if disabled Transcodes (TrueHD 7.1 =&gt; EAC3 7.1)

[^L22]: - Transcodes (DCA 7.1 =&gt; AAC 5.1)<br>- Plex LG Video Settings Force Direct Play Disabled else no audio

[^M22]: - Plex LG Video Settings Force Direct Play Enabled if disabled Transcodes to AAC Stereo

[^O22]: - Transcodes (DCA 5.1 =&gt; AAC 5.1)<br>- Plex LG Video Settings Force Direct Play Disabled else no audio

[^A23]: Test Result Provided by: BeyondBroke<br>Test Result: <https://discord.com/channels/492590071455940612/1231867264010289163>

[^D23]: Fallback to HDR10

[^E23]: Fallback to HDR10

[^G23]: Didn't get a test result for this HDR Format, but considering that it supports HDR10, it will fallback to HDR10. If it supports HDR10+ I don't know till someone is able to provide this info.

[^H23]: Audio is transcoded to E-AC3/DD+

[^K23]: Audio is transcoded to E-AC3/DD+

[^L23]: Audio is transcoded to AC3/DD

[^G24]: Will fallback to HDR10

[^G25]: Will fallback to HDR10

[^A26]: Test results provided by: TRaSH and several others<br>Date of Test: April 2024

[^D26]: It should play Profile 7 releases without issues.<br>But:<br>FEL/MEL  will be played as single layer. <br>MEL means, the EL is just empty, so Profile 7 BL+MEL+RPU is totally identical to Profile 8 BL+RPU

[^G26]: Will fallback to HDR10

[^A27]: Test results provided by: Jimbo<br>Test Results: <https://discord.com/channels/492590071455940612/1226612112730882100><br>Date of Test: April 2024

[^G27]: Will fallback to HDR10

[^A28]: Supports Dolby Vision including FEL and 3D on CoreELEC -ng. They can decode 24fps VC-1 content using a software decoding. Somewhat faster than S905X4-J devices, but more expensive and lack hardware support for AV1. CoreELEC can be installed on the emmc and HS400 enabled which greatly reduces boot time and speeds up which greatly reduces boot time and speeds up the interface making it feel significantly faster than the S905X4.<br><br>If you want the best media box to only run CoreELEC, then the Ugoos AM6b+ is the best box with its faster processor and the ability to install COREelec to the emmc with HS400, but it runs an older version of Android and sacrifices support for certified apps including Netflix and AV1. However, only the Ugoos AM6b+ can fully replace a disc-based player.

[^D28]: The AM6B+ can play both FEL and MEL DV P7 as well Single Track and Dual Track

[^A29]: Test results provided by: Chris.dc<br>Date of Test: April 2024<br>Test Result Provided by: ANIMATEK<br>Test Result: <https://discord.com/channels/492590071455940612/1228243671200043018><br>Date of Test: April 2024

[^H29]: There are special consideration, where the audio setup will modify the EDID profile that gets send from the TV to the Zidoo, cutting some framerate/resolution combinations. In some cases this lead to a frame or two skipping every now and then, because the framerate of the video didn't match the TV.<br>See this thread on how to get the best EDID for your setup (even if this is not an issue for you, as there are other benefits):  <https://forum.zidoo.tv/index.php?threads/edid-thread-rtd1619bpd-players.96829/>

[^I29]: There are special consideration, where the audio setup will modify the EDID profile that gets send from the TV to the Zidoo, cutting some framerate/resolution combinations. In some cases this lead to a frame or two skipping every now and then, because the framerate of the video didn't match the TV.<br>See this thread on how to get the best EDID for your setup (even if this is not an issue for you, as there are other benefits):  <https://forum.zidoo.tv/index.php?threads/edid-thread-rtd1619bpd-players.96829/>

[^K29]: There are special consideration, where the audio setup will modify the EDID profile that gets send from the TV to the Zidoo, cutting some framerate/resolution combinations. In some cases this lead to a frame or two skipping every now and then, because the framerate of the video didn't match the TV.<br>See this thread on how to get the best EDID for your setup (even if this is not an issue for you, as there are other benefits):  <https://forum.zidoo.tv/index.php?threads/edid-thread-rtd1619bpd-players.96829/>

[^L29]: There are special consideration, where the audio setup will modify the EDID profile that gets send from the TV to the Zidoo, cutting some framerate/resolution combinations. In some cases this lead to a frame or two skipping every now and then, because the framerate of the video didn't match the TV.<br>See this thread on how to get the best EDID for your setup (even if this is not an issue for you, as there are other benefits):  <https://forum.zidoo.tv/index.php?threads/edid-thread-rtd1619bpd-players.96829/>
