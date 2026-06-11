import { useState, useRef, useEffect } from 'react'
import './App.css'
import imgHomeLock    from './assets/img_home_lock.png'
import imgWifiOn         from './assets/img_wifi_on.png'
import imgWifiOff        from './assets/img_wifi_off.png'
import imgHomeDisconnect from './assets/img_home_disconnect.png'
import imgHomeUnlock  from './assets/img_home_unlock.png'
import imgHomeOpen    from './assets/img_home_open.png'
import btnCircle      from './assets/btn_circle.png'
import btnPage        from './assets/btn_page.png'
import btnPage2       from './assets/btn_page2.png'
import icWifi         from './assets/ic_bpart_wifi.png'
import icQrcode       from './assets/ic_bpart_qrcode.png'
import icKey          from './assets/ic_bpart_key.png'
import icVolume       from './assets/ic_bpart_volume.png'
import icPasscode           from './assets/ic_bpart_passcode.png'
import icPasscodeSearch     from './assets/ic_bpart_passcode_search.png'
import icPasscodeSet        from './assets/ic_bpart_passcode_set.png'
import icManagePasscode        from './assets/ic_manage_passcode.png'
import icManagePasscodeSearch  from './assets/ic_manage_passcode_search.png'
import icManagePasscodeSet     from './assets/ic_manage_passcode_set.png'
import icDeviceA      from './assets/ic_device_a.png'
import icDeviceATook  from './assets/ic_device_a_took.png'
import icBpartChangea from './assets/ic_bpart_changea.png'
import icDeviceC      from './assets/ic_device_c.png'
import icAddonAdd     from './assets/ic_addon_add.png'
import icAddonInfo    from './assets/ic_addon_info.png'
import icAddonRemove  from './assets/ic_addon_remove.png'
import icBpartInfo    from './assets/ic_bpart_info.png'
import icBpartReset   from './assets/ic_bpart_reset.png'
import icKeyCard      from './assets/ic_key_card.png'
import icKeyMkey      from './assets/ic_key_mkey.png'
import icKeyCardList    from './assets/ic_key_card_list.png'
import icKeyCardAdd     from './assets/ic_key_card_add.png'
import icKeyCardRemove  from './assets/ic_key_card_remove.png'
import icKeyMkeyList    from './assets/ic_key_mkey_list.png'
import icKeyMkeyAdd     from './assets/ic_key_mkey_add.png'
import icKeyMkeyPin     from './assets/ic_key_mkey_pin.png'
import icKeyMkeySearch  from './assets/ic_key_mkey_search.png'
import icKeyMkeyLock    from './assets/ic_key_mkey_lock.png'
import imgPasscode      from './assets/img_passcode.png'
import imgPassdevice   from './assets/img_passdevice.png'
import imgPasssos      from './assets/img_passsos.png'
import imgCardsearch   from './assets/img_cardsearch.png'
import imgCardadd      from './assets/img_cardadd.png'
import imgWificard     from './assets/img_wificard.png'
import imgBettery      from './assets/img_bettery.png'
import imgRemove       from './assets/img_remove.png'
import imgAChange      from './assets/img_a_change.png'
import imgCChange      from './assets/img_c_change.png'
import imgTest         from './assets/img_test.png'
import imgFocus        from './assets/img_focus.png'
import imgAddon        from './assets/img_addon.png'
import imgAddonAdd     from './assets/img_addon_add.png'
import imgAddonRemove  from './assets/img_addon_remove.png'
import imgAddonData    from './assets/img_addon_data.png'
import imgSuccess      from './assets/img_success.png'
import imgCateye        from './assets/img_cateye.png'
import imgResetFolder    from './assets/img_reset_folder.png'
import imgAddMkey        from './assets/img_addmkey.png'
import imgScanMkey       from './assets/img_scanmkey.png'
import imgSystemLanding  from './assets/img_system_landing.png'
import imgAddFinger      from './assets/img_addfinger.png'
import imgAddFace        from './assets/img_addface.png'
import imgAddHand        from './assets/img_addhand.png'

const disconnectBadges = (
  <>
    <div style={{ position: 'absolute', left: 58, top: 12, background: '#df0000', borderRadius: 20, padding: '4px 12px', fontSize: 17, color: '#fff', whiteSpace: 'nowrap', pointerEvents: 'none' }}>門內裝置斷聯</div>
    <div style={{ position: 'absolute', left: 188, top: 12, background: '#df0000', borderRadius: 20, padding: '4px 12px', fontSize: 17, color: '#fff', whiteSpace: 'nowrap', pointerEvents: 'none' }}>門外裝置斷聯</div>
  </>
)

function HomePage({ setPage, wifiOk }) {
  return (
    <div className="page">
      <img src={wifiOk ? imgHomeLock : imgHomeDisconnect} className="page-bg" alt="" />
      <img src={wifiOk ? imgWifiOn : imgWifiOff} alt="" style={{ position: 'absolute', left: 16, top: 14, width: 28, height: 28, pointerEvents: 'none' }} />
      {!wifiOk && disconnectBadges}
      <div className="touch-area" style={{ left: 210, top: 292, width: 70,  height: 66  }} onClick={() => setPage('login')}       />
      <div className="touch-area" style={{ left: 21,  top: 76,  width: 281, height: 214 }} onClick={() => setPage('home_unlock')} />
      <div className="touch-area" style={{ left: 0,   top: 402, width: 320, height: 77  }} onClick={() => setPage('home_open')}   />
    </div>
  )
}

function HomeUnlockPage({ setPage, wifiOk }) {
  return (
    <div className="page">
      <img src={wifiOk ? imgHomeUnlock : imgHomeDisconnect} className="page-bg" alt="" />
      <img src={wifiOk ? imgWifiOn : imgWifiOff} alt="" style={{ position: 'absolute', left: 16, top: 14, width: 28, height: 28, pointerEvents: 'none' }} />
      {!wifiOk && disconnectBadges}
      <div className="touch-area" style={{ left: 210, top: 292, width: 70,  height: 66  }} onClick={() => setPage('login')}      />
      <div className="touch-area" style={{ left: 21,  top: 76,  width: 281, height: 214 }} onClick={() => setPage('home')}       />
      <div className="touch-area" style={{ left: 0,   top: 402, width: 320, height: 77  }} onClick={() => setPage('home_open')}  />
    </div>
  )
}

function ImagePage({ src, onBack, onLogin, wifiOk }) {
  return (
    <div className="page" onClick={onBack}>
      <img src={wifiOk ? src : imgHomeDisconnect} className="page-bg" alt="" />
      <img src={wifiOk ? imgWifiOn : imgWifiOff} alt="" style={{ position: 'absolute', left: 16, top: 14, width: 28, height: 28, pointerEvents: 'none' }} />
      {!wifiOk && disconnectBadges}
      {onLogin && (
        <div className="touch-area" style={{ left: 210, top: 292, width: 70, height: 66 }}
          onClick={e => { e.stopPropagation(); onLogin() }} />
      )}
    </div>
  )
}

const KEYS = [
  ['1','2','3'],
  ['4','5','6'],
  ['7','8','9'],
  ['返回','0','⌫'],
]

function LoginPage({ setPage }) {
  const [digits, setDigits] = useState([])  // [{value, id}, ...]
  const [revealed, setRevealed] = useState(new Set())
  const nextId = useRef(0)

  function press(key) {
    if (key === '返回') { setPage('home'); return }
    if (key === '⌫') { setDigits(d => d.slice(0, -1)); return }
    if (digits.length < 4) {
      const id = nextId.current++
      setDigits(d => [...d, { value: key, id }])
      setRevealed(r => new Set([...r, id]))
      setTimeout(() => {
        setRevealed(r => { const n = new Set(r); n.delete(id); return n })
      }, 1000)
    }
  }

  return (
    <div className="login-page">
      <p className="login-title">請輸入管理密碼</p>

      <div className="login-input">
        {[0,1,2,3].map(i => (
          <div key={i} className="login-slot">
            <span className="login-char">
              {digits[i] ? (revealed.has(digits[i].id) ? digits[i].value : '*') : ' '}
            </span>
            {i === digits.length && <div className="login-cursor" />}
          </div>
        ))}
      </div>

      <div className="login-pad">
        {KEYS.map((row, ri) => (
          <div key={ri} className="login-pad-row">
            {row.map(k => (
              <button key={k} className={`login-key${k === '返回' ? ' login-key--sm' : ''}`} onClick={() => press(k)}>
                {k}
              </button>
            ))}
          </div>
        ))}
      </div>

      <button className="login-confirm" onClick={() => setPage('system_setting')}>確認</button>
    </div>
  )
}

const SS_ITEMS = [
  { id: 'wifi',     title: 'Wifi 設定',    sub: '尚未連線',              subColor: '#999', icon: icWifi     },
  { id: 'qrcode',  title: '綁定條碼',     sub: '尚未綁定',              subColor: '#666', icon: icQrcode   },
  { id: 'passcode',title: '密碼設定',     sub: '開鎖密碼\n主機管理密碼', subColor: '#666', icon: icPasscode },
  { id: 'key',     title: '感應開鎖管理', sub: '卡片/Ｍ-Key',           subColor: '#666', icon: icKey      },
  { id: 'volume',  title: '功能設定',     sub: '裝置基本設定',          subColor: '#666', icon: icVolume   },
  { id: 'lock_info',title: '電子鎖資訊',  sub: '設備資料',              subColor: '#666', icon: icBpartInfo },
]

const SS2_ITEMS = [
  { id: 'probe',      title: '門外感應器', sub: '門外感應卡片\n的設備',      subColor: '#666', icon: icDeviceA    },
  { id: 'controller', title: '門鎖控制器', sub: '控制內側原始門鎖\n的設備',  subColor: '#666', icon: icDeviceC    },
  { id: 'reset',      title: '系統重置',   sub: '',                        subColor: '#666', icon: icBpartReset },
]

const KEY_ITEMS = [
  { id: 'card', title: '卡片管理',    sub: '已啟用', subColor: '#337c05', icon: icKeyCard  },
  { id: 'mkey', title: 'M-key 管理', sub: '已啟用', subColor: '#337c05', icon: icKeyMkey  },
]

const MKEY_ITEMS = [
  { id: 'list',   title: 'M-key 列表', sub: '查看此電子鎖\n已綁定的\nM-key',           subColor: '#666', icon: icKeyMkeyList   },
  { id: 'add',    title: '新增 M-key', sub: '需輸入 Pin 碼',                           subColor: '#666', icon: icKeyMkeyAdd    },
  { id: 'pin',    title: '變更 Pin 碼', sub: 'Pin 碼預設\n「0000」',                   subColor: '#666', icon: icKeyMkeyPin    },
  { id: 'search', title: '感應查詢',   sub: '查詢 M-key 是否已\n綁定電子鎖、\n重置 M-key', subColor: '#666', icon: icKeyMkeySearch },
  { id: 'lock',   title: '關聯電子鎖', sub: '查看這個 M-key\n可用來開啟\n哪些電子鎖',  subColor: '#666', icon: icKeyMkeyLock   },
  { id: 'toggle', title: '功能開關',   sub: '關閉功能可\n節省電量',                    subColor: '#666', icon: null            },
]

const CARD_ITEMS = [
  { title: '卡片列表', sub: '查看此電子鎖已綁定的卡片', icon: icKeyCardList   },
  { title: '新增卡片', sub: '可連續新增多張卡片',       icon: icKeyCardAdd    },
  { title: '刪除卡片', sub: '可感應刪除、單張刪除、或全部刪除。', icon: icKeyCardRemove },
]

const PASSCODE_ITEMS = [
  { id: 'query_unlock', title: '查詢開鎖密碼', sub: '開關門鎖的密碼',              subColor: '#666', icon: icPasscodeSearch        },
  { id: 'change_unlock',title: '變更開鎖密碼', sub: '開關門鎖的密碼',              subColor: '#666', icon: icPasscodeSet           },
  { id: 'query_manage', title: '查詢主機密碼', sub: '進入主機管理介面\n的密碼',    subColor: '#666', icon: icManagePasscodeSearch  },
  { id: 'change_manage',title: '變更管理密碼', sub: '進入主機管理介面\n的密碼',    subColor: '#666', icon: icManagePasscodeSet     },
]

const DEMO_PASSCODE        = '11222223'
const DEMO_MANAGE_PASSCODE = '1123'

function PasscodeQueryPage({ onBack, password = DEMO_PASSCODE }) {
  const rows = []
  for (let i = 0; i < password.length; i += 8) {
    rows.push(password.slice(i, i + 8).split(''))
  }

  return (
    <div className="pq-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">查詢開鎖密碼</span>
        <div style={{ width: 40 }} />
      </div>

      <img src={imgPasscode} alt="" className="pq-hero-img" />

      <div className="pq-bezel">
        <p className="pq-label">您的開鎖密碼為</p>
        <div className="pq-digits-area">
          <div className="pq-digits">
            {rows.map((row, ri) => (
              <div key={ri} className="pq-row">
                {row.map((d, di) => <span key={di} className="pq-digit">{d}</span>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ManagePasscodeQueryPage({ onBack, password = DEMO_MANAGE_PASSCODE }) {
  const rows = []
  for (let i = 0; i < password.length; i += 8) {
    rows.push(password.slice(i, i + 8).split(''))
  }

  return (
    <div className="pq-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">查詢管理密碼</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgPassdevice} alt="" className="pq-hero-img" />
      <div className="pq-bezel">
        <p className="pq-label">您的管理密碼為</p>
        <div className="pq-digits-area">
          <div className="pq-digits">
            {rows.map((row, ri) => (
              <div key={ri} className="pq-row">
                {row.map((d, di) => <span key={di} className="pq-digit">{d}</span>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ChangePasscodePage({ onBack, title, onNext, maxDigits = 8, minDigits = 6, errorText = '請輸入 6~8 個字元' }) {
  const [digits, setDigits] = useState([])
  const [revealed, setRevealed] = useState(new Set())
  const [error, setError] = useState(false)
  const nextId = useRef(0)

  function press(key) {
    if (key === '返回') { onBack(); return }
    if (key === '⌫') { setDigits(d => d.slice(0, -1)); return }
    if (digits.length < maxDigits) {
      const id = nextId.current++
      setDigits(d => [...d, { value: key, id }])
      setRevealed(r => new Set([...r, id]))
      setError(false)
      setTimeout(() => {
        setRevealed(r => { const n = new Set(r); n.delete(id); return n })
      }, 1000)
    }
  }

  function handleNext() {
    if (digits.length < minDigits) { setError(true); return }
    onNext(digits.map(d => d.value).join(''))
  }

  const gap = maxDigits <= 4 ? 28 : 16
  const slotCount = maxDigits > 4 ? Math.min(digits.length + 1, maxDigits) : maxDigits

  return (
    <div className="login-page">
      <p className="login-title" style={error ? { color: '#DD330D' } : undefined}>
        {error ? errorText : title}
      </p>
      <div className="login-input" style={{ gap }}>
        {Array.from({ length: slotCount }, (_, i) => (
          <div key={i} className="login-slot">
            <span className="login-char">
              {digits[i] ? (revealed.has(digits[i].id) ? digits[i].value : '*') : ' '}
            </span>
            {i === digits.length && <div className="login-cursor" />}
          </div>
        ))}
      </div>
      <div className="login-pad">
        {KEYS.map((row, ri) => (
          <div key={ri} className="login-pad-row">
            {row.map(k => (
              <button key={k} className={`login-key${k === '返回' ? ' login-key--sm' : ''}`} onClick={() => press(k)}>
                {k}
              </button>
            ))}
          </div>
        ))}
      </div>
      <button className="login-confirm" onClick={handleNext}>下一步</button>
    </div>
  )
}

function ConfirmPasscodePage({ onBack, onConfirmed, title, toastText, expected, maxDigits = 8, mismatchText = '與開門碼不相符' }) {
  const [digits, setDigits] = useState([])
  const [revealed, setRevealed] = useState(new Set())
  const [showToast, setShowToast] = useState(false)
  const [error, setError] = useState(false)
  const nextId = useRef(0)

  function press(key) {
    if (key === '返回') { onBack(); return }
    if (key === '⌫') { setDigits(d => d.slice(0, -1)); return }
    if (digits.length < maxDigits) {
      const id = nextId.current++
      setDigits(d => [...d, { value: key, id }])
      setRevealed(r => new Set([...r, id]))
      setError(false)
      setTimeout(() => {
        setRevealed(r => { const n = new Set(r); n.delete(id); return n })
      }, 1000)
    }
  }

  function confirm() {
    if (digits.map(d => d.value).join('') !== expected) { setError(true); return }
    setShowToast(true)
    setTimeout(() => onConfirmed(), 2000)
  }

  const gap = maxDigits <= 4 ? 28 : 16
  const slotCount = maxDigits > 4 ? Math.min(digits.length + 1, maxDigits) : maxDigits

  return (
    <div className="login-page">
      <p className="login-title" style={error ? { color: '#DD330D' } : undefined}>
        {error ? mismatchText : title}
      </p>
      <div className="login-input" style={{ gap }}>
        {Array.from({ length: slotCount }, (_, i) => (
          <div key={i} className="login-slot">
            <span className="login-char">
              {digits[i] ? (revealed.has(digits[i].id) ? digits[i].value : '*') : ' '}
            </span>
            {i === digits.length && <div className="login-cursor" />}
          </div>
        ))}
      </div>
      <div className="login-pad">
        {KEYS.map((row, ri) => (
          <div key={ri} className="login-pad-row">
            {row.map(k => (
              <button key={k} className={`login-key${k === '返回' ? ' login-key--sm' : ''}`} onClick={() => press(k)}>
                {k}
              </button>
            ))}
          </div>
        ))}
      </div>
      <button className="login-confirm" onClick={confirm}>確認</button>
      {showToast && <div className="toast">{toastText}</div>}
    </div>
  )
}

const DEMO_SOS_PASSCODE = '112333'

function SosPasscodeQueryPage({ onBack, password = DEMO_SOS_PASSCODE }) {
  const rows = []
  for (let i = 0; i < password.length; i += 8) {
    rows.push(password.slice(i, i + 8).split(''))
  }

  return (
    <div className="pq-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">查詢求救密碼</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgPasssos} alt="" className="pq-hero-img" />
      <div className="pq-bezel">
        <p className="pq-label">您的求救密碼為</p>
        <div className="pq-digits-area">
          <div className="pq-digits">
            {rows.map((row, ri) => (
              <div key={ri} className="pq-row">
                {row.map((d, di) => <span key={di} className="pq-digit">{d}</span>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function PasscodeSettingPage({ onBack, setPage }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">密碼設定</span>
        <div style={{ width: 40 }} />
      </div>
      <div className="ss-grid">
        {PASSCODE_ITEMS.map((item, i) => (
          <div key={i} className="ss-cell"
            style={{ cursor: 'pointer' }}
            onClick={
              item.id === 'query_unlock'  ? () => setPage('passcode_query') :
              item.id === 'query_manage'  ? () => setPage('manage_passcode_query') :
              item.id === 'query_sos'     ? () => setPage('sos_passcode_query') :
              item.id === 'change_unlock' ? () => setPage('change_unlock') :
              item.id === 'change_manage' ? () => setPage('change_manage') :
              item.id === 'set_sos'      ? () => setPage('set_sos') :
              undefined
            }
          >
            <div className="ss-cell-text">
              <span className="ss-cell-title">{item.title}</span>
              {item.sub.split('\n').map((line, j) => (
                <span key={j} className="ss-cell-sub" style={{ color: item.subColor }}>{line}</span>
              ))}
            </div>
            <img src={item.icon} alt="" className="ss-cell-icon" />
          </div>
        ))}
      </div>
    </div>
  )
}

function KeyManagementPage({ onBack, setPage }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">感應開鎖管理</span>
        <div style={{ width: 40 }} />
      </div>
      <div className="ss-grid">
        {KEY_ITEMS.map((item) => (
          <div key={item.id} className="ss-cell"
            style={{ cursor: ['card','mkey'].includes(item.id) ? 'pointer' : undefined }}
            onClick={
              item.id === 'card' ? () => setPage('card_management') :
              item.id === 'mkey' ? () => setPage('mkey_management') :
              undefined
            }
          >
            <div className="ss-cell-text">
              <span className="ss-cell-title">{item.title}</span>
              <span className="ss-cell-sub" style={{ color: item.subColor }}>{item.sub}</span>
            </div>
            <img src={item.icon} alt="" className="ss-cell-icon" />
          </div>
        ))}
      </div>
    </div>
  )
}

function FingerAddPage({ setPage }) {
  const [progress, setProgress] = useState(100)
  const [toast, setToast] = useState(false)
  const intervalRef = useRef(null)
  function finish() {
    clearInterval(intervalRef.current)
    setToast(true)
    setTimeout(() => setPage('finger_management'), 1500)
  }
  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => { if (p <= 1) { clearInterval(intervalRef.current); finish(); return 0 } return p - 1 })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div className="pq-page" onClick={finish} style={{ cursor: 'pointer' }}>
      <div className="ss-titlebar" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div style={{ width: 40 }} />
        <span className="ss-title">新增指紋</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgAddFinger} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 101, width: 200, height: 200, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 325, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
      <p style={{ position: 'absolute', left: 40, right: 40, bottom: 90, transform: 'translateY(50%)', fontSize: 16, color: '#333', lineHeight: 1.7, zIndex: 1, textAlign: 'center' }}>
        請將手指放置於 MH Lock 的<br />指紋感應器上進行新增。<br />當聽到逼聲時，即表示新增成功。
      </p>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
      {toast && <div className="toast" style={{ zIndex: 2 }}>指紋新增成功！</div>}
    </div>
  )
}

const DEMO_FINGERS = [
  { name: '指紋01' },
]

function FingerManagementPage({ onBack, setPage, setSelectedFinger }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">指紋管理</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div className="cl-list">
          <div className="cl-row" style={{ cursor: 'pointer' }} onClick={() => setPage('finger_add')}>
            <span className="cl-row-label">新增指紋</span>
            <PlusIcon />
          </div>
          {DEMO_FINGERS.map((item, i) => (
            <div key={i} className="cl-row" style={{ cursor: 'pointer' }}
              onClick={() => { setSelectedFinger(item); setPage('finger_delete') }}>
              <span className="cl-row-label">名稱：{item.name}</span>
              <TrashIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FingerDeletePage({ onBack, item, setPage }) {
  const [toast, setToast] = useState(false)

  function handleDelete() {
    setToast(true)
    setTimeout(() => setPage('finger_management'), 1500)
  }

  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">刪除開鎖方式</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ position: 'absolute', top: 117, left: 26, width: 268, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ background: '#fff', borderRadius: 8, padding: '12px 16px' }}>
          <span style={{ fontSize: 16, color: '#666' }}>名稱：{item?.name}</span>
        </div>
        <p style={{ fontSize: 16, color: '#333', lineHeight: 1.7 }}>
          確定要刪除此解鎖工具嗎？<br />刪除後，將無法再用此工具開啟這台電子鎖。
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={onBack} style={{ flex: 1, border: 'none', background: '#666', fontSize: 20, color: '#fff', cursor: 'pointer' }}>取消</button>
        <button onClick={handleDelete} style={{ flex: 1, border: 'none', background: '#dd330d', fontSize: 20, color: '#fff', cursor: 'pointer' }}>刪除</button>
      </div>
      {toast && <div className="toast" style={{ zIndex: 2 }}>指紋已刪除！</div>}
    </div>
  )
}

function FaceAddPage({ setPage }) {
  const [progress, setProgress] = useState(100)
  const [toast, setToast] = useState(false)
  const intervalRef = useRef(null)
  function finish() {
    clearInterval(intervalRef.current)
    setToast(true)
    setTimeout(() => setPage('face_management'), 1500)
  }
  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => { if (p <= 1) { clearInterval(intervalRef.current); finish(); return 0 } return p - 1 })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div className="pq-page" onClick={finish} style={{ cursor: 'pointer' }}>
      <div className="ss-titlebar" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div style={{ width: 40 }} />
        <span className="ss-title">新增臉部資料</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgAddFace} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 101, width: 200, height: 200, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 325, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
      <p style={{ position: 'absolute', left: 40, right: 40, bottom: 90, transform: 'translateY(50%)', fontSize: 16, color: '#333', lineHeight: 1.7, zIndex: 1, textAlign: 'center' }}>
        請站在 MH Lock 的<br />臉部掃描鏡頭前進行新增。<br />當聽到逼聲時，即表示新增成功。
      </p>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
      {toast && <div className="toast" style={{ zIndex: 2 }}>臉部資料新增成功！</div>}
    </div>
  )
}

const DEMO_FACES = [
  { name: '臉部資料01' },
]

function FaceManagementPage({ onBack, setPage, setSelectedFace }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">臉部資料管理</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div className="cl-list">
          <div className="cl-row" style={{ cursor: 'pointer' }} onClick={() => setPage('face_add')}>
            <span className="cl-row-label">新增臉部資料</span>
            <PlusIcon />
          </div>
          {DEMO_FACES.map((item, i) => (
            <div key={i} className="cl-row" style={{ cursor: 'pointer' }}
              onClick={() => { setSelectedFace(item); setPage('face_delete') }}>
              <span className="cl-row-label">名稱：{item.name}</span>
              <TrashIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FaceDeletePage({ onBack, item, setPage }) {
  const [toast, setToast] = useState(false)

  function handleDelete() {
    setToast(true)
    setTimeout(() => setPage('face_management'), 1500)
  }

  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">刪除開鎖方式</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ position: 'absolute', top: 117, left: 26, width: 268, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ background: '#fff', borderRadius: 8, padding: '12px 16px' }}>
          <span style={{ fontSize: 16, color: '#666' }}>名稱：{item?.name}</span>
        </div>
        <p style={{ fontSize: 16, color: '#333', lineHeight: 1.7 }}>
          確定要刪除此解鎖工具嗎？<br />刪除後，將無法再用此工具開啟這台電子鎖。
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={onBack} style={{ flex: 1, border: 'none', background: '#666', fontSize: 20, color: '#fff', cursor: 'pointer' }}>取消</button>
        <button onClick={handleDelete} style={{ flex: 1, border: 'none', background: '#dd330d', fontSize: 20, color: '#fff', cursor: 'pointer' }}>刪除</button>
      </div>
      {toast && <div className="toast" style={{ zIndex: 2 }}>臉部資料已刪除！</div>}
    </div>
  )
}

function HandAddPage({ setPage }) {
  const [progress, setProgress] = useState(100)
  const [toast, setToast] = useState(false)
  const intervalRef = useRef(null)
  function finish() {
    clearInterval(intervalRef.current)
    setToast(true)
    setTimeout(() => setPage('hand_management'), 1500)
  }
  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => { if (p <= 1) { clearInterval(intervalRef.current); finish(); return 0 } return p - 1 })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div className="pq-page" onClick={finish} style={{ cursor: 'pointer' }}>
      <div className="ss-titlebar" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div style={{ width: 40 }} />
        <span className="ss-title">新增掌靜脈</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgAddHand} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 101, width: 200, height: 200, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 325, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
      <p style={{ position: 'absolute', left: 40, right: 40, bottom: 90, transform: 'translateY(50%)', fontSize: 16, color: '#333', lineHeight: 1.7, zIndex: 1, textAlign: 'center' }}>
        請將手掌打開，在 MH Lock<br />掌靜脈掃描鏡頭前進行新增。<br />當聽到逼聲時，即表示新增成功。
      </p>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
      {toast && <div className="toast" style={{ zIndex: 2 }}>掌靜脈新增成功！</div>}
    </div>
  )
}

const DEMO_HANDS = [
  { name: '掌靜脈01' },
]

function HandManagementPage({ onBack, setPage, setSelectedHand }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">掌靜脈管理</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div className="cl-list">
          <div className="cl-row" style={{ cursor: 'pointer' }} onClick={() => setPage('hand_add')}>
            <span className="cl-row-label">新增掌靜脈</span>
            <PlusIcon />
          </div>
          {DEMO_HANDS.map((item, i) => (
            <div key={i} className="cl-row" style={{ cursor: 'pointer' }}
              onClick={() => { setSelectedHand(item); setPage('hand_delete') }}>
              <span className="cl-row-label">名稱：{item.name}</span>
              <TrashIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HandDeletePage({ onBack, item, setPage }) {
  const [toast, setToast] = useState(false)

  function handleDelete() {
    setToast(true)
    setTimeout(() => setPage('hand_management'), 1500)
  }

  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">刪除開鎖方式</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ position: 'absolute', top: 117, left: 26, width: 268, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ background: '#fff', borderRadius: 8, padding: '12px 16px' }}>
          <span style={{ fontSize: 16, color: '#666' }}>名稱：{item?.name}</span>
        </div>
        <p style={{ fontSize: 16, color: '#333', lineHeight: 1.7 }}>
          確定要刪除此解鎖工具嗎？<br />刪除後，將無法再用此工具開啟這台電子鎖。
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={onBack} style={{ flex: 1, border: 'none', background: '#666', fontSize: 20, color: '#fff', cursor: 'pointer' }}>取消</button>
        <button onClick={handleDelete} style={{ flex: 1, border: 'none', background: '#dd330d', fontSize: 20, color: '#fff', cursor: 'pointer' }}>刪除</button>
      </div>
      {toast && <div className="toast" style={{ zIndex: 2 }}>掌靜脈已刪除！</div>}
    </div>
  )
}

function MkeyManagementPage({ onBack, setPage }) {
  const [toggleOn, setToggleOn] = useState(true)

  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">M-key 管理</span>
        <div style={{ width: 40 }} />
      </div>
      <div className="ss-grid">
        {MKEY_ITEMS.map((item) => (
          <div key={item.id} className="ss-cell"
            style={['list','add','pin','search','lock'].includes(item.id) ? { cursor: 'pointer' } : undefined}
            onClick={
              item.id === 'list'   ? () => setPage('mkey_list') :
              item.id === 'add'    ? () => setPage('mkey_add') :
              item.id === 'pin'    ? () => setPage('mkey_change_pin_scan') :
              item.id === 'search' ? () => setPage('mkey_search_scan') :
              item.id === 'lock'   ? () => setPage('mkey_lock_scan') :
              undefined
            }
          >
            <div className="ss-cell-text">
              <span className="ss-cell-title">{item.title}</span>
              {item.sub.split('\n').map((line, i) => (
                <span key={i} className="ss-cell-sub" style={{ color: item.subColor }}>{line}</span>
              ))}
            </div>
            {item.icon
              ? <img src={item.icon} alt="" className="ss-cell-icon" />
              : <button className={`toggle${toggleOn ? ' toggle--on' : ''}`} onClick={() => setToggleOn(v => !v)}>
                  <div className="toggle-knob" />
                </button>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

const DEMO_MKEYS = [
  { name: 'M-key022222222222...', id: '3827262', time: '2025/02/20 17:22:21' },
  { name: 'M-key03',             id: '3827262', time: '2025/02/20 17:22:21' },
]

function MkeyPinPage({ onBack, title = '請輸入 M-key PIN 碼', titleColor, onConfirm, toastText, setPage }) {
  const [digits, setDigits] = useState([])
  const [revealed, setRevealed] = useState(new Set())
  const [toast, setToast] = useState(false)
  const nextId = useRef(0)

  function press(key) {
    if (key === '返回') { onBack(); return }
    if (key === '⌫') { setDigits(d => d.slice(0, -1)); return }
    if (digits.length < 4) {
      const id = nextId.current++
      setDigits(d => [...d, { value: key, id }])
      setRevealed(r => new Set([...r, id]))
      setTimeout(() => setRevealed(r => { const n = new Set(r); n.delete(id); return n }), 1000)
    }
  }

  function confirm() {
    const code = digits.map(d => d.value).join('')
    if (onConfirm) { onConfirm(code); return }
    setToast(true)
    setTimeout(() => setPage('mkey_management'), 1500)
  }

  return (
    <div className="login-page">
      <p className="login-title" style={titleColor ? { color: titleColor } : undefined}>{title}</p>
      <div className="login-input">
        {[0,1,2,3].map(i => (
          <div key={i} className="login-slot">
            <span className="login-char">
              {digits[i] ? (revealed.has(digits[i].id) ? digits[i].value : '*') : ' '}
            </span>
            {i === digits.length && <div className="login-cursor" />}
          </div>
        ))}
      </div>
      <div className="login-pad">
        {KEYS.map((row, ri) => (
          <div key={ri} className="login-pad-row">
            {row.map(k => (
              <button key={k} className={`login-key${k === '返回' ? ' login-key--sm' : ''}`} onClick={() => press(k)}>{k}</button>
            ))}
          </div>
        ))}
      </div>
      <button className="login-confirm" onClick={confirm}>確認</button>
      {toast && <div className="toast" style={{ zIndex: 2 }}>{toastText || 'M-key 新增成功！'}</div>}
    </div>
  )
}

function MkeyChangePinConfirmPage({ onBack, expected, setPage }) {
  const [digits, setDigits] = useState([])
  const [revealed, setRevealed] = useState(new Set())
  const [mismatch, setMismatch] = useState(false)
  const [toast, setToast] = useState(false)
  const nextId = useRef(0)

  function press(key) {
    if (key === '返回') { onBack(); return }
    if (key === '⌫') { setDigits(d => d.slice(0, -1)); setMismatch(false); return }
    if (digits.length < 4) {
      const id = nextId.current++
      setDigits(d => [...d, { value: key, id }])
      setRevealed(r => new Set([...r, id]))
      setTimeout(() => setRevealed(r => { const n = new Set(r); n.delete(id); return n }), 1000)
    }
  }

  function confirm() {
    const code = digits.map(d => d.value).join('')
    if (code === expected) {
      setToast(true)
      setTimeout(() => setPage('mkey_management'), 1500)
    } else {
      setMismatch(true)
      setDigits([])
    }
  }

  const title = mismatch ? '與 M-key pin 碼不相符' : '請確認 M-key pin 碼'

  return (
    <div className="login-page">
      <p className="login-title" style={mismatch ? { color: '#DD330D' } : undefined}>{title}</p>
      <div className="login-input">
        {[0,1,2,3].map(i => (
          <div key={i} className="login-slot">
            <span className="login-char">
              {digits[i] ? (revealed.has(digits[i].id) ? digits[i].value : '*') : ' '}
            </span>
            {i === digits.length && <div className="login-cursor" />}
          </div>
        ))}
      </div>
      <div className="login-pad">
        {KEYS.map((row, ri) => (
          <div key={ri} className="login-pad-row">
            {row.map(k => (
              <button key={k} className={`login-key${k === '返回' ? ' login-key--sm' : ''}`} onClick={() => press(k)}>{k}</button>
            ))}
          </div>
        ))}
      </div>
      <button className="login-confirm" onClick={confirm}>確認</button>
      {toast && <div className="toast" style={{ zIndex: 2 }}>Pin 碼變更成功，請妥善保管</div>}
    </div>
  )
}

function MkeyChangePinScanPage({ setPage }) {
  const [progress, setProgress] = useState(100)
  const intervalRef = useRef(null)
  function finish() { clearInterval(intervalRef.current); setPage('mkey_change_pin_current') }
  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => { if (p <= 1) { clearInterval(intervalRef.current); finish(); return 0 } return p - 1 })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div className="pq-page" onClick={finish} style={{ cursor: 'pointer' }}>
      <div className="ss-titlebar" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div style={{ width: 40 }} />
        <span className="ss-title">讀取 M-key</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgScanMkey} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 106, width: 200, height: 200, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 325, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
      <p style={{ position: 'absolute', left: 40, right: 40, bottom: 90, transform: 'translateY(50%)', fontSize: 16, color: '#333', lineHeight: 1.7, zIndex: 1 }}>
        請將 M-Key 放置於螢幕旁的感應圖示上進行讀取，並等待逼聲。
      </p>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
    </div>
  )
}

function MkeyScanPage({ setPage }) {
  const [progress, setProgress] = useState(100)
  const intervalRef = useRef(null)
  function finish() { clearInterval(intervalRef.current); setPage('mkey_add_pin') }
  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => { if (p <= 1) { clearInterval(intervalRef.current); finish(); return 0 } return p - 1 })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div className="pq-page" onClick={finish} style={{ cursor: 'pointer' }}>
      <div className="ss-titlebar" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div style={{ width: 40 }} />
        <span className="ss-title">新增 M-Key</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgScanMkey} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 106, width: 200, height: 200, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 325, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
      <p style={{ position: 'absolute', left: 40, right: 40, bottom: 90, transform: 'translateY(50%)', fontSize: 16, color: '#333', lineHeight: 1.7, zIndex: 1 }}>
        將 M-Key 放置於螢幕旁邊的感應圖示上進行新增，並等待逼聲。下一步需要輸入 PIN 碼。
      </p>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
    </div>
  )
}

function MkeySearchScanPage({ setPage }) {
  const [progress, setProgress] = useState(100)
  const intervalRef = useRef(null)
  function finish() { clearInterval(intervalRef.current); setPage('mkey_search_result') }
  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => { if (p <= 1) { clearInterval(intervalRef.current); finish(); return 0 } return p - 1 })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div className="pq-page" onClick={finish} style={{ cursor: 'pointer' }}>
      <div className="ss-titlebar" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div style={{ width: 40 }} />
        <span className="ss-title">讀取 M-key</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgScanMkey} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 106, width: 200, height: 200, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 325, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
      <p style={{ position: 'absolute', left: 40, right: 40, bottom: 90, transform: 'translateY(50%)', fontSize: 16, color: '#333', lineHeight: 1.7, zIndex: 1 }}>
        請將 M-Key 放置於螢幕旁的感應圖示上進行讀取，並等待逼聲。
      </p>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
    </div>
  )
}

function MkeySearchResultPage({ setPage }) {
  const [toast, setToast] = useState(false)
  const item = DEMO_MKEYS[0]

  function handleRemove() {
    setToast(true)
    setTimeout(() => setPage('mkey_management'), 1500)
  }

  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">感應查詢</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ position: 'absolute', top: 117, left: 26, width: 268, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ background: '#fff', borderRadius: 8, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 16, color: '#666' }}>名稱：{item.name}</span>
          <span style={{ fontSize: 16, color: '#666' }}>ID：{item.id}</span>
          <span style={{ fontSize: 16, color: '#666' }}>啟用時間：{item.time}</span>
        </div>
        <p style={{ fontSize: 16, color: '#333', lineHeight: 1.7 }}>
          確定要刪除此解鎖工具嗎？<br />刪除後，將無法再用此工具開啟這台電子鎖。
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={() => setPage('mkey_management')} style={{ flex: 1, border: 'none', background: '#666', fontSize: 20, color: '#fff', cursor: 'pointer' }}>離開</button>
        <button onClick={handleRemove} style={{ flex: 1, border: 'none', background: 'linear-gradient(90deg, #c92b08 0%, #e64523 100%)', fontSize: 20, color: '#fff', cursor: 'pointer' }}>移除</button>
      </div>
      {toast && <div className="toast" style={{ zIndex: 2 }}>M-key 刪除成功！</div>}
    </div>
  )
}

const DEMO_LOCKS = [
  { label: '電子鎖：我的家・大門',   time: '2025/02/20 17:22:21' },
  { label: '電子鎖：桃園老家・大門', time: '2025/02/20 17:22:21' },
  { label: '電子鎖：永慶物業管理',   time: '2025/02/20 17:22:21' },
]

function MkeyLockScanPage({ setPage }) {
  const [progress, setProgress] = useState(100)
  const intervalRef = useRef(null)
  function finish() { clearInterval(intervalRef.current); setPage('mkey_lock_pin') }
  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => { if (p <= 1) { clearInterval(intervalRef.current); finish(); return 0 } return p - 1 })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div className="pq-page" onClick={finish} style={{ cursor: 'pointer' }}>
      <div className="ss-titlebar" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div style={{ width: 40 }} />
        <span className="ss-title">讀取 M-key</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgScanMkey} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 106, width: 200, height: 200, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 325, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
      <p style={{ position: 'absolute', left: 40, right: 40, bottom: 90, transform: 'translateY(50%)', fontSize: 16, color: '#333', lineHeight: 1.7, zIndex: 1 }}>
        請將 M-Key 放置於螢幕旁的感應圖示上進行讀取，並等待逼聲。
      </p>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
    </div>
  )
}

function MkeyLockListPage({ onBack, setPage, setSelectedLock }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">已綁定電子鎖</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div className="cl-list">
          <div className="cl-row" style={{ cursor: 'pointer' }} onClick={() => { setSelectedLock(null); setPage('mkey_lock_remove') }}>
            <span className="cl-row-label">移除全部電子鎖</span>
            <TrashIcon />
          </div>
          {DEMO_LOCKS.map((item, i) => (
            <div key={i} className="cl-row" style={{ cursor: 'pointer' }} onClick={() => { setSelectedLock(item); setPage('mkey_lock_remove') }}>
              <div className="cl-row-text">
                <span className="cl-row-label">{item.label}</span>
                <span className="cl-row-label" style={{ color: '#666' }}>啟用時間：{item.time}</span>
              </div>
              <TrashIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MkeyLockRemovePage({ onBack, item, setPage }) {
  const [toast, setToast] = useState(false)

  function handleRemove() {
    setToast(true)
    setTimeout(() => setPage('mkey_lock_list'), 1500)
  }

  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">移除電子鎖</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ position: 'absolute', top: 117, left: 26, width: 268, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ background: '#fff', borderRadius: 8, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {item ? (
            <>
              <span style={{ fontSize: 16, color: '#666' }}>{item.label}</span>
              <span style={{ fontSize: 16, color: '#666' }}>配對時間：{item.time}</span>
            </>
          ) : (
            <span style={{ fontSize: 16, color: '#666' }}>全部電子鎖</span>
          )}
        </div>
        <p style={{ fontSize: 16, color: '#333', lineHeight: 1.7 }}>
          確定要移除電子鎖嗎？<br />
          移除後，將無法使用這個 M-key 開啟上述電子鎖。<br /><br />
          請注意，移除過程中，請勿讓 M-key 遠離主機，以免資料處理失敗。
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={onBack} style={{ flex: 1, border: 'none', background: '#666', fontSize: 20, color: '#fff', cursor: 'pointer' }}>取消</button>
        <button onClick={handleRemove} style={{ flex: 1, border: 'none', background: '#dd330d', fontSize: 20, color: '#fff', cursor: 'pointer' }}>移除</button>
      </div>
      {toast && <div className="toast" style={{ zIndex: 2 }}>已移除電子鎖！</div>}
    </div>
  )
}

function MkeyAddPage({ onBack, setPage }) {
  return (
    <div style={{ width: 320, height: 480, background: 'linear-gradient(180deg,#e5f0f6 0%,#c4d8ec 100%)', position: 'relative', overflow: 'hidden' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">新增 M-Key</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgAddMkey} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 81, width: 200, height: 200, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 282, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
      <p style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 306, width: 240, fontSize: 16, color: '#333', lineHeight: 1.7, zIndex: 1 }}>
        請搖晃 M-key 3 秒，以進入綁定狀態 (雙色燈號閃爍且震動)。<br />M-key Pin 碼預設值為「0000」
      </p>
      <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', width: 165, height: 52, zIndex: 1 }}>
        <button onClick={() => setPage('mkey_scan')} style={{ width: '100%', height: '100%', border: '1px solid #4980bb', borderRadius: 8, background: 'transparent', fontSize: 18, color: '#2e739e', cursor: 'pointer' }}>確認已閃燈</button>
      </div>
    </div>
  )
}

function MkeyListPage({ onBack, setPage, setSelectedMkey }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">M-key 列表</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div className="cl-list">
          {DEMO_MKEYS.map((item, i) => (
            <div key={i} className="cl-row" style={{ cursor: 'pointer' }}
              onClick={() => { setSelectedMkey(item); setPage('mkey_delete') }}>
              <div className="cl-row-text">
                <span className="cl-row-label" style={{ color: '#666' }}>名稱：{item.name}</span>
                <span className="cl-row-label">ID：{item.id}</span>
                <span className="cl-row-label" style={{ color: '#666' }}>啟用時間：{item.time}</span>
              </div>
              <TrashIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MkeyDeletePage({ onBack, item, setPage }) {
  const [toast, setToast] = useState(false)

  function handleDelete() {
    setToast(true)
    setTimeout(() => setPage('mkey_list'), 1500)
  }

  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">刪除開鎖方式</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ position: 'absolute', top: 117, left: 26, width: 268, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ background: '#fff', borderRadius: 8, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 16, color: '#666' }}>名稱：{item?.name}</span>
          <span style={{ fontSize: 16, color: '#666' }}>ID：{item?.id}</span>
          <span style={{ fontSize: 16, color: '#666' }}>啟用時間：{item?.time}</span>
        </div>
        <p style={{ fontSize: 16, color: '#333', lineHeight: 1.7 }}>
          確定要刪除此解鎖工具嗎？<br />刪除後，將無法再用此工具開啟這台電子鎖。
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={onBack} style={{ flex: 1, border: 'none', background: '#666', fontSize: 20, color: '#fff', cursor: 'pointer' }}>取消</button>
        <button onClick={handleDelete} style={{ flex: 1, border: 'none', background: '#dd330d', fontSize: 20, color: '#fff', cursor: 'pointer' }}>刪除</button>
      </div>
      {toast && <div className="toast" style={{ zIndex: 2 }}>M-key 刪除成功！</div>}
    </div>
  )
}

const DEMO_CARDS = [
  { name: '大熊卡', id: '3827262', time: '2025/02/20 17:22:21' },
  { name: '一級卡', id: '3827262', time: '2025/02/20 17:22:21' },
  { name: '獵人卡', id: '3827262', time: '2025/03/05 11:08:44' },
]

function CardDeleteAllPage({ onBack, setPage }) {
  const [showToast, setShowToast] = useState(false)

  function handleDelete() {
    setShowToast(true)
    setTimeout(() => setPage('card_remove'), 1500)
  }

  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 320, height: 81, background: 'linear-gradient(180deg, #e5f0f6 0%, #c4d8ec 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 16, color: '#333' }}>刪除開鎖方式</span>
      </div>
      <div style={{ position: 'absolute', top: 117, left: 26, width: 268, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ background: '#fff', borderRadius: 8, padding: '12px 16px' }}>
          <span style={{ fontSize: 16, color: '#666' }}>全部卡片</span>
        </div>
        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.6 }}>
          <p>確定要刪除此解鎖工具嗎？</p>
          <p>刪除後，將無法再用此工具開啟這台電子鎖。</p>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, display: 'flex' }}>
        <button style={{ flex: 1, background: '#666', border: 'none', fontSize: 20, color: '#fff', cursor: 'pointer' }} onClick={onBack}>取消</button>
        <button style={{ flex: 1, background: '#dd330d', border: 'none', fontSize: 20, color: '#fff', cursor: 'pointer' }} onClick={handleDelete}>刪除</button>
      </div>
      {showToast && <div className="toast">卡片刪除成功！</div>}
    </div>
  )
}

function CardScanDeletePage({ setPage }) {
  const [progress, setProgress] = useState(100)
  const intervalRef = useRef(null)

  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => {
        if (p <= 1) {
          clearInterval(intervalRef.current)
          setPage('card_scan_delete_confirm')
          return 0
        }
        return p - 1
      })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])

  function handleClick() {
    clearInterval(intervalRef.current)
    setPage('card_scan_delete_confirm')
  }

  return (
    <div className="pq-page" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 81, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
        <span style={{ fontSize: 16, color: '#333' }}>讀取卡片</span>
      </div>
      <img src={imgCardsearch} alt="" style={{ position: 'absolute', left: 64, top: 97, width: 200, height: 200, objectFit: 'contain' }} />
      <div className="pq-bezel" style={{ top: 325 }}>
        <p style={{ fontSize: 14, color: '#333', textAlign: 'center', lineHeight: 1.6, padding: '0 32px', marginTop: 16 }}>
          請將卡片放置於 MH Lock 螢幕<br />旁邊的感應圖示上進行感應。
        </p>
      </div>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
    </div>
  )
}

function CardScanDeleteConfirmPage({ setPage, card = DEMO_CARDS[0] }) {
  const [showToast, setShowToast] = useState(false)

  function handleDelete() {
    setShowToast(true)
    setTimeout(() => setPage('card_remove'), 1500)
  }

  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 320, height: 81, background: 'linear-gradient(180deg, #e5f0f6 0%, #c4d8ec 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 16, color: '#333' }}>刪除開鎖方式</span>
      </div>
      <div style={{ position: 'absolute', top: 117, left: 26, width: 268, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ background: '#fff', borderRadius: 8, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 16, color: '#666' }}>名稱：{card.name}</span>
          <span style={{ fontSize: 16, color: '#666' }}>ID：{card.id}</span>
          <span style={{ fontSize: 16, color: '#666' }}>啟用時間：{card.time}</span>
        </div>
        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.6 }}>
          <p>確定要刪除此解鎖工具嗎？</p>
          <p>刪除後，將無法再用此工具開啟這台電子鎖。</p>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, display: 'flex' }}>
        <button style={{ flex: 1, background: '#666', border: 'none', fontSize: 20, color: '#fff', cursor: 'pointer' }} onClick={() => setPage('card_remove')}>取消</button>
        <button style={{ flex: 1, background: '#dd330d', border: 'none', fontSize: 20, color: '#fff', cursor: 'pointer' }} onClick={handleDelete}>刪除</button>
      </div>
      {showToast && <div className="toast">卡片刪除成功！</div>}
    </div>
  )
}

function BatteryIcon({ level = 80 }) {
  const color = level >= 50 ? '#27D66A' : level >= 20 ? '#F1C00F' : '#DD330D'
  const maxFill = 21
  const fillW = Math.max(0, Math.round(maxFill * level / 100))
  return (
    <svg width="28" height="12" viewBox="0 0 28 12" style={{ display: 'block' }}>
      <rect x="0.75" y="0.75" width="23.5" height="10.5" rx="2" stroke="#757575" strokeWidth="1.5" fill="none" />
      <rect x="25" y="3.5" width="2.5" height="5" rx="0.75" fill="#757575" />
      {fillW > 0 && <rect x="2" y="2" width={fillW} height="8" rx="1" fill={color} />}
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <line x1="12" y1="5" x2="12" y2="19" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5" y1="12" x2="19" y2="12" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M10 3h4" stroke="#dd330d" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="4" y1="6" x2="20" y2="6" stroke="#dd330d" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6 6l.8 13a1 1 0 001 .95h8.4a1 1 0 001-.95L18 6" stroke="#dd330d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="10" y1="10" x2="10" y2="16" stroke="#dd330d" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="10" x2="14" y2="16" stroke="#dd330d" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CardRemovePage({ onBack, setPage, setSelectedCard }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">刪除卡片</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div className="cl-list">
          <div className="cl-row" style={{ cursor: 'pointer' }} onClick={() => setPage('card_delete_all')}>
            <span className="cl-row-label">刪除全部卡片</span>
            <TrashIcon />
          </div>
          <div className="cl-row" style={{ cursor: 'pointer' }} onClick={() => setPage('card_scan_delete')}>
            <span className="cl-row-label">感應刪除卡片</span>
            <TrashIcon />
          </div>
          {DEMO_CARDS.map(card => (
            <div key={card.name} className="cl-row" style={{ cursor: 'pointer' }}
              onClick={() => { setSelectedCard(card); setPage('card_item_delete') }}>
              <div className="cl-row-text">
                <span className="cl-row-label">名稱：{card.name}</span>
                <span className="cl-row-label">ID：{card.id}</span>
                <span className="cl-row-label">啟用時間：{card.time}</span>
              </div>
              <TrashIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CardListPage({ onBack, setPage }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">卡片列表</span>
        <div style={{ width: 40 }} />
      </div>
      <div className="cl-list">
        <div className="cl-row" style={{ cursor: 'pointer' }} onClick={() => setPage('card_read')}>
          <span className="cl-row-label">感應查詢</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="10.5" cy="10.5" r="5.5" stroke="#333" strokeWidth="1.5"/>
            <line x1="15" y1="15" x2="20" y2="20" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        {DEMO_CARDS.map((card) => (
          <div key={card.name} className="cl-row">
            <div className="cl-row-text">
              <span className="cl-row-label">名稱：{card.name}</span>
              <span className="cl-row-label">ID：{card.id}</span>
              <span className="cl-row-label">啟用時間：{card.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CardReadPage({ onBack, setPage }) {
  const [progress, setProgress] = useState(100)
  const intervalRef = useRef(null)

  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => {
        if (p <= 1) {
          clearInterval(intervalRef.current)
          setPage('card_delete')
          return 0
        }
        return p - 1
      })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])

  function handleClick() {
    clearInterval(intervalRef.current)
    setPage('card_delete')
  }

  return (
    <div className="pq-page" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 81, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
        <span style={{ fontSize: 16, color: '#333' }}>讀取卡片</span>
      </div>
      <img src={imgCardsearch} alt="" style={{ position: 'absolute', left: 64, top: 97, width: 200, height: 200, objectFit: 'contain' }} />
      <div className="pq-bezel" style={{ top: 325 }}>
        <p style={{ fontSize: 14, color: '#333', textAlign: 'center', lineHeight: 1.6, padding: '0 32px', marginTop: 16 }}>
          請將卡片放置於 MH Lock<br />螢幕旁邊的感應圖示上進行感應。
        </p>
      </div>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
    </div>
  )
}

function CardAddPage({ setPage }) {
  const [progress, setProgress] = useState(100)
  const intervalRef = useRef(null)

  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => {
        if (p <= 1) {
          clearInterval(intervalRef.current)
          setPage('card_add_result')
          return 0
        }
        return p - 1
      })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])

  function handleClick() {
    clearInterval(intervalRef.current)
    setPage('card_add_result')
  }

  return (
    <div className="pq-page" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 81, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
        <span style={{ fontSize: 16, color: '#333' }}>新增卡片</span>
      </div>
      <img src={imgCardadd} alt="" style={{ position: 'absolute', left: 60, top: 97, width: 200, height: 200, objectFit: 'contain' }} />
      <div className="pq-bezel" style={{ top: 325 }}>
        <p style={{ fontSize: 14, color: '#333', textAlign: 'center', lineHeight: 1.6, padding: '0 32px', marginTop: 16 }}>
          請將卡片放置於 MH Lock 螢幕<br />上方的感應圖示上進行新增。<br />當聽到逼聲時，即表示新增成功。
        </p>
      </div>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
    </div>
  )
}

function CardAddResultPage({ setPage }) {
  const [count, setCount] = useState(1)
  const [showToast, setShowToast] = useState(false)

  function handleFinish() {
    setShowToast(true)
    setTimeout(() => setPage('card_management'), 1500)
  }

  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 320, height: 81, background: 'linear-gradient(180deg, #e5f0f6 0%, #c4d8ec 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 16, color: '#333' }}>新增卡片</span>
      </div>
      <p style={{ position: 'absolute', top: 108, left: 0, right: 0, textAlign: 'center', fontSize: 16, color: count >= 10 ? '#dd330d' : '#333' }}>
        {count >= 10 ? '超過卡片上限' : '等待感應下一張卡…'}
      </p>
      <img src={imgCardadd} alt="" onClick={() => setCount(c => c < 10 ? c + 1 : c)}
        style={{ position: 'absolute', left: 54, top: 129, width: 211, height: 200, objectFit: 'contain', opacity: 0.5, cursor: count >= 10 ? 'default' : 'pointer' }} />
      <div style={{ position: 'absolute', top: 337, left: '50%', transform: 'translateX(-50%)', background: '#fff', borderRadius: 8, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
        <span style={{ fontSize: 16, color: '#333' }}>已感應</span>
        <span style={{ fontSize: 32, fontWeight: 600, color: '#0aa2c1', lineHeight: 1 }}>{count}</span>
        <span style={{ fontSize: 16, color: '#333' }}>張卡片</span>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, display: 'flex' }}>
        <button style={{ flex: 1, background: '#666', border: 'none', fontSize: 20, color: '#fff', cursor: 'pointer' }} onClick={() => setPage('card_management')}>取消</button>
        <button style={{ flex: 1, background: 'linear-gradient(90deg, #4980bb 0%, #09519d 100%)', border: 'none', fontSize: 20, color: '#fff', cursor: 'pointer' }} onClick={handleFinish}>完成新增</button>
      </div>
      {showToast && <div className="toast">卡片新增成功！</div>}
    </div>
  )
}

function CardDeletePage({ onBack, setPage }) {
  const card = DEMO_CARDS[0]
  const [showToast, setShowToast] = useState(false)

  function handleDelete() {
    setShowToast(true)
    setTimeout(() => setPage('card_list'), 1500)
  }

  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 320, height: 81, background: 'linear-gradient(180deg, #e5f0f6 0%, #c4d8ec 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 16, color: '#333' }}>刪除開鎖方式</span>
      </div>
      <div style={{ position: 'absolute', top: 117, left: 26, width: 268, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ background: '#fff', borderRadius: 8, padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 16, color: '#666' }}>名稱：{card.name}</span>
          <span style={{ fontSize: 16, color: '#666' }}>ID：{card.id}</span>
          <span style={{ fontSize: 16, color: '#666' }}>啟用時間：{card.time}</span>
        </div>
        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.6 }}>
          <p>確定要刪除此解鎖工具嗎？</p>
          <p>刪除後，將無法再用此工具開啟這台電子鎖。</p>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, display: 'flex' }}>
        <button style={{ flex: 1, background: '#666', border: 'none', fontSize: 20, color: '#fff', cursor: 'pointer' }} onClick={onBack}>取消</button>
        <button style={{ flex: 1, background: '#dd330d', border: 'none', fontSize: 20, color: '#fff', cursor: 'pointer' }} onClick={handleDelete}>刪除</button>
      </div>
      {showToast && <div className="toast">卡片刪除成功！</div>}
    </div>
  )
}

function CardManagementPage({ onBack, setPage }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">卡片管理</span>
        <div style={{ width: 40 }} />
      </div>
      <div className="km-list">
        {CARD_ITEMS.map((item) => (
          <div key={item.title} className="km-cell"
            style={{ cursor: ['卡片列表','新增卡片','刪除卡片'].includes(item.title) ? 'pointer' : undefined }}
            onClick={item.title === '卡片列表' ? () => setPage('card_list') : item.title === '新增卡片' ? () => setPage('card_add') : item.title === '刪除卡片' ? () => setPage('card_remove') : undefined}
          >
            <div className="ss-cell-text">
              <span className="ss-cell-title">{item.title}</span>
              <span className="ss-cell-sub" style={{ color: '#666' }}>{item.sub}</span>
            </div>
            <img src={item.icon} alt="" className="ss-cell-icon" />
          </div>
        ))}
      </div>
    </div>
  )
}

function SystemSetting2Page({ onBack, setPage }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">電子鎖管理</span>
        <button className="ss-grid-btn" onClick={() => setPage('system_setting')}>
          <img src={btnPage2} alt="" width="40" height="40" />
        </button>
      </div>
      <div className="ss-grid">
        {SS2_ITEMS.map((item) => (
          <div key={item.title} className="ss-cell"
            style={['probe', 'controller', 'reset'].includes(item.id) ? { cursor: 'pointer' } : undefined}
            onClick={
              item.id === 'probe'      ? () => setPage('probe_addon') :
              item.id === 'controller' ? () => setPage('controller_addon') :
              item.id === 'reset'      ? () => setPage('system_reset') :
              undefined
            }
          >
            <div className="ss-cell-text">
              <span className="ss-cell-title">{item.title}</span>
              {item.sub.split('\n').filter(Boolean).map((line, i) => (
                <span key={i} className="ss-cell-sub" style={{ color: item.subColor }}>{line}</span>
              ))}
            </div>
            <img src={item.icon} alt="" className="ss-cell-icon" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ProbeAddonPage({ onBack, setPage }) {
  const cells = [
    {
      title: '解鎖卡榫 / 更換電池',
      sub: '門外感應器的卡榫會打開，可將\n門外感應器取下。或是使用已\n綁定的卡片 / M-key，連續感應\n10 秒，也可將裝置取下。',
      icon: icDeviceATook,
      onClick: () => setPage('change_battery'),
    },
    {
      title: '更換門外感應器',
      sub: '重新綁定 / 配對裝置。',
      icon: icBpartChangea,
      onClick: () => setPage('replace_probe_confirm'),
    },
  ]
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">門外感應器</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {cells.map(cell => (
          <div key={cell.title} onClick={cell.onClick} style={{ background: '#f7f7f7', border: '1px solid #fff', borderRadius: 2, height: 130, position: 'relative', overflow: 'hidden', cursor: cell.onClick ? 'pointer' : 'default' }}>
            <div style={{ position: 'absolute', left: 13, top: 13, right: 62 }}>
              <div style={{ fontSize: 18, fontWeight: 510, color: '#333', marginBottom: 6, lineHeight: 1 }}>{cell.title}</div>
              <div style={{ fontSize: 15, color: '#666', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{cell.sub}</div>
            </div>
            <img src={cell.icon} alt="" style={{ position: 'absolute', bottom: 7, right: 7, width: 48, height: 48, opacity: 0.3 }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function ChangeBatteryPage({ onBack, setPage }) {
  return (
    <div style={{ width: 320, height: 480, background: 'linear-gradient(180deg, #e5f0f6 0%, #c4d8ec 100%)', position: 'relative', overflow: 'hidden' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">更換電池</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgBettery} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 81, width: 200, height: 200, objectFit: 'contain' }} />
      <p style={{ position: 'absolute', left: 0, right: 0, bottom: 137, transform: 'translateY(50%)', fontSize: 16, color: '#333', textAlign: 'center', lineHeight: 1.7 }}>
        確定要取下門外感應器嗎？<br />點擊確認取下後，卡榫將會開啟。
      </p>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={onBack} style={{ flex: 1, border: 'none', background: '#fff', fontSize: 17, color: '#666', cursor: 'pointer' }}>
          取消
        </button>
        <button onClick={() => setPage('remove_device')} style={{ flex: 1, border: 'none', background: 'linear-gradient(90deg, #4980bb 0%, #09519d 100%)', fontSize: 17, color: '#fff', cursor: 'pointer' }}>
          確認更換
        </button>
      </div>
    </div>
  )
}

function RemoveDevicePage({ onBack }) {
  return (
    <div style={{ width: 320, height: 480, background: 'linear-gradient(180deg, #e5f0f6 0%, #c4d8ec 100%)', position: 'relative', overflow: 'hidden' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">取下裝置</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgRemove} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 81, width: 200, height: 200, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 307, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
      <p style={{ position: 'absolute', left: 0, right: 0, bottom: 118, transform: 'translateY(50%)', fontSize: 16, color: '#333', textAlign: 'center', lineHeight: 1.7, zIndex: 1 }}>
        門外感應器的卡榫已開啟，<br />可以將裝置取下了。
      </p>
      <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', width: 144, height: 52, zIndex: 1 }}>
        <button onClick={onBack} style={{ width: '100%', height: '100%', border: '1px solid #4980bb', borderRadius: 8, background: 'transparent', fontSize: 18, color: '#2e739e', cursor: 'pointer' }}>
          返回
        </button>
      </div>
    </div>
  )
}

function AddonManagePage({ onBack, setPage }) {
  const cells = [
    { title: '新增周邊設備', sub: '新增主機、門上件的周邊設備。', icon: icAddonAdd,    onClick: () => setPage('addon_scan') },
    { title: '設備資訊',     sub: '周邊設備的相關資料。',         icon: icAddonInfo,   onClick: () => setPage('addon_info') },
    { title: '移除周邊設備', sub: '移除周邊設備。',               icon: icAddonRemove, onClick: () => setPage('addon_remove_confirm') },
  ]
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">周邊設備管理</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {cells.map(cell => (
          <div key={cell.title} onClick={cell.onClick} style={{ background: '#f7f7f7', border: '1px solid #fff', borderRadius: 2, height: 130, position: 'relative', overflow: 'hidden', cursor: cell.onClick ? 'pointer' : 'default' }}>
            <div style={{ position: 'absolute', left: 13, top: 13, right: 62 }}>
              <div style={{ fontSize: 18, fontWeight: 510, color: '#333', marginBottom: 6, lineHeight: 1 }}>{cell.title}</div>
              <div style={{ fontSize: 15, color: '#666', lineHeight: 1.4 }}>{cell.sub}</div>
            </div>
            <img src={cell.icon} alt="" style={{ position: 'absolute', bottom: 7, right: 7, width: 48, height: 48, opacity: 0.3 }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function AddonRemoveConfirmPage({ onBack, setPage }) {
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative', overflow: 'hidden' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">移除周邊設備</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgAddonRemove} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 81, width: 184, height: 184, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 265, left: 26, width: 268, background: '#fff', borderRadius: 8, padding: '12px 16px', textAlign: 'center' }}>
        <span style={{ fontSize: 16, color: '#666' }}>紅外線指紋感應器RF_01</span>
      </div>
      <p style={{ position: 'absolute', left: 0, right: 0, bottom: 153, transform: 'translateY(100%)', fontSize: 16, color: '#333', textAlign: 'center', lineHeight: 1.7 }}>
        確定要移除周邊設備嗎？
      </p>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={onBack} style={{ flex: 1, border: 'none', background: '#666', fontSize: 20, color: '#fff', cursor: 'pointer' }}>
          取消
        </button>
        <button onClick={() => setPage('addon_remove_data')} style={{ flex: 1, border: 'none', background: '#dd330d', fontSize: 20, color: '#fff', cursor: 'pointer' }}>
          移除
        </button>
      </div>
    </div>
  )
}

function AddonRemoveDataPage({ onBack, setPage }) {
  const [toast, setToast] = useState(null)
  function handleKeep() {
    setToast('周邊設備已彈出，原有設定仍記錄在\n設備中，重新安裝後即可立即使用。')
    setTimeout(() => setPage('addon_manage'), 3500)
  }
  function handleDelete() {
    setToast('周邊設備已彈出，請記得將週邊設備取下。')
    setTimeout(() => setPage('addon_manage'), 3500)
  }
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative', overflow: 'hidden' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">移除周邊設備</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgAddonData} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 81, width: 200, height: 200, objectFit: 'contain' }} />
      <p style={{ position: 'absolute', left: 0, right: 0, bottom: 165, transform: 'translateY(50%)', fontSize: 16, color: '#333', textAlign: 'center', lineHeight: 1.7 }}>
        請選擇是否要保留感應設備中的<br />生物辨識資料。
      </p>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={handleKeep} style={{ flex: 1, border: 'none', background: 'linear-gradient(90deg, #0081e3 0%, #1065a6 100%)', fontSize: 20, color: '#fff', cursor: 'pointer' }}>
          保留資料
        </button>
        <button onClick={handleDelete} style={{ flex: 1, border: 'none', background: '#dd330d', fontSize: 20, color: '#fff', cursor: 'pointer' }}>
          刪除資料
        </button>
      </div>
      {toast && (
        <div style={{ position: 'absolute', left: 22, top: 390, width: 276, background: '#9ce7b0', borderRadius: 8, padding: '10px 16px', fontSize: 15, color: '#333', lineHeight: 1.6, pointerEvents: 'none', zIndex: 2, whiteSpace: 'pre-line' }}>
          {toast}
        </div>
      )}
    </div>
  )
}

function AddonScanPage({ setPage }) {
  const [progress, setProgress] = useState(100)
  const intervalRef = useRef(null)
  function finish() {
    clearInterval(intervalRef.current)
    setPage('addon_confirm')
  }
  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => {
        if (p <= 1) { clearInterval(intervalRef.current); finish(); return 0 }
        return p - 1
      })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div className="pq-page" onClick={finish} style={{ cursor: 'pointer' }}>
      <div className="ss-titlebar" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div style={{ width: 40 }} />
        <span className="ss-title">新增周邊設備</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgAddon} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 106, width: 200, height: 200, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 325, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
      <p style={{ position: 'absolute', left: 0, right: 0, bottom: 90, transform: 'translateY(50%)', fontSize: 16, color: '#333', textAlign: 'center', lineHeight: 1.7, zIndex: 1 }}>
        請將周邊設備放置於 MH Lock 螢幕<br />旁邊的感應圖示上進行新增。
      </p>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
    </div>
  )
}

function AddonConfirmPage({ onBack, setPage }) {
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative', overflow: 'hidden' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">新增周邊設備</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgAddonAdd} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 81, width: 184, height: 184, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 265, left: 26, width: 268, background: '#fff', borderRadius: 8, padding: '12px 16px', textAlign: 'center' }}>
        <span style={{ fontSize: 16, color: '#666' }}>紅外線指紋感應器RF_01</span>
      </div>
      <p style={{ position: 'absolute', left: 0, right: 0, bottom: 153, transform: 'translateY(100%)', fontSize: 16, color: '#333', textAlign: 'center', lineHeight: 1.7 }}>
        請將設備安裝至<br />門外感應裝置的磁吸接口。
      </p>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={onBack} style={{ flex: 1, border: 'none', background: '#666', fontSize: 20, color: '#fff', cursor: 'pointer' }}>
          取消
        </button>
        <button onClick={() => setPage('addon_success')} style={{ flex: 1, border: 'none', background: 'linear-gradient(90deg, #0081e3 0%, #1065a6 100%)', fontSize: 20, color: '#fff', cursor: 'pointer' }}>
          確定安裝
        </button>
      </div>
    </div>
  )
}

function AddonInfoPage({ onBack }) {
  const rows = [
    { label: 'Addon',           value: 'MH Fingerprint RS721' },
    { label: 'Type',            value: 'Fingerprint Sensor' },
    { label: 'Addon ID',        value: '128931293123' },
    { label: 'Activation time', value: '2027/06/10' },
    { label: 'Addon Warranty',  value: '2027/06/10' },
  ]
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">周邊設備資訊</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 0 }}>
        {rows.map(row => (
          <div key={row.label} style={{ height: 61, background: '#fefefe', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
            <span style={{ fontSize: 16, color: '#333' }}>{row.label}</span>
            <span style={{ fontSize: 16, color: '#333', textAlign: 'right' }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ControllerAddonPage({ onBack, setPage }) {
  const cells = [
    {
      title: '更換門鎖控制器',
      sub: '重新綁定 / 配對裝置。',
      icon: icBpartChangea,
      onClick: () => setPage('replace_controller_confirm'),
    },
    {
      title: '門鎖狀態偵測',
      sub: '點擊後，門鎖馬達會自動轉動至定位並停止。\n請在停止後確認鎖舌狀態',
      icon: icBpartChangea,
      onClick: () => setPage('lock_detect'),
    },
  ]
  return (
    <div style={{ width: 320, height: 480, background: '#f1f2f3', position: 'relative' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">門鎖控制器</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {cells.map(cell => (
          <div key={cell.title} onClick={cell.onClick} style={{ background: '#f7f7f7', border: '1px solid #fff', borderRadius: 2, height: 130, position: 'relative', overflow: 'hidden', cursor: cell.onClick ? 'pointer' : 'default' }}>
            <div style={{ position: 'absolute', left: 13, top: 13, right: 62 }}>
              <div style={{ fontSize: 18, fontWeight: 510, color: '#333', marginBottom: 6, lineHeight: 1 }}>{cell.title}</div>
              <div style={{ fontSize: 15, color: '#666', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{cell.sub}</div>
            </div>
            <img src={cell.icon} alt="" style={{ position: 'absolute', bottom: 7, right: 7, width: 48, height: 48, opacity: 0.3 }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function LockDetectPage({ onBack, setPage }) {
  const [loading, setLoading] = useState(false)
  return (
    <div style={{ width: 320, height: 480, position: 'relative', overflow: 'hidden' }}>
      {/* base page */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #e5f0f6 0%, #c4d8ec 100%)', opacity: loading ? 0.2 : 1, pointerEvents: 'none' }}>
        <div className="ss-titlebar">
          <div style={{ width: 40 }} />
          <span className="ss-title">開鎖測試</span>
          <div style={{ width: 40 }} />
        </div>
        <img src={imgTest} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 108, width: 200, height: 200, objectFit: 'contain' }} />
        <div style={{ position: 'absolute', top: 308, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
        <p style={{ position: 'absolute', left: 0, right: 0, bottom: 122, transform: 'translateY(50%)', fontSize: 16, color: '#333', textAlign: 'center', lineHeight: 1.7 }}>
          請先把門開啟，再開始自動偵測。<br />校正時門鎖會轉動，請勿用手阻擋。
        </p>
      </div>
      {/* back button always active */}
      {!loading && (
        <>
          <button className="ss-back-btn" onClick={onBack} style={{ position: 'absolute', top: 20, left: 20, zIndex: 2 }}>
            <img src={btnCircle} alt="" width="40" height="40" />
          </button>
          <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', width: 196, height: 52, zIndex: 2 }}>
            <button onClick={() => setLoading(true)} style={{ width: '100%', height: '100%', border: '1px solid #4980bb', borderRadius: 8, background: 'transparent', fontSize: 18, color: '#2e739e', cursor: 'pointer' }}>
              啟動自動偵測
            </button>
          </div>
        </>
      )}
      {/* loading overlay */}
      {loading && (
        <div onClick={() => setPage('lock_position')} style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }}>
          <div className="spinner" style={{ marginTop: 47 }} />
          <p style={{ marginTop: 20, fontSize: 16, color: '#333', fontWeight: 500 }}>校正中...</p>
        </div>
      )}
    </div>
  )
}

function LockPositionPage({ onBack, setPage }) {
  const [loading, setLoading] = useState(false)
  return (
    <div style={{ width: 320, height: 480, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: '#e8f2f7', opacity: loading ? 0.2 : 1, pointerEvents: 'none' }}>
        <div className="ss-titlebar">
          <div style={{ width: 40 }} />
          <span className="ss-title">開鎖測試</span>
          <div style={{ width: 40 }} />
        </div>
        <p style={{ position: 'absolute', top: 117, left: 26, width: 268, fontSize: 16, color: '#333', lineHeight: 1.7, textAlign: 'center' }}>
          請選擇鎖舌目前的狀態，系<br />統將會以此判斷門鎖狀態。
        </p>
        <img src={imgFocus} alt="" style={{ position: 'absolute', left: 0, top: 188, width: 320, height: 170, objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
          <div style={{ flex: 1, background: '#666' }} />
          <div style={{ flex: 1, background: 'linear-gradient(90deg, #0081e3 0%, #1065a6 100%)' }} />
        </div>
      </div>
      {!loading && (
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60, zIndex: 2 }}>
          <button onClick={() => setLoading(true)} style={{ flex: 1, border: 'none', background: '#666', fontSize: 20, color: '#fff', cursor: 'pointer' }}>
            鎖舌收起
          </button>
          <button onClick={() => setLoading(true)} style={{ flex: 1, border: 'none', background: 'linear-gradient(90deg, #0081e3 0%, #1065a6 100%)', fontSize: 20, color: '#fff', cursor: 'pointer' }}>
            鎖舌伸出
          </button>
        </div>
      )}
      {loading && (
        <div onClick={() => setPage('lock_detect_success')} style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }}>
          <div className="spinner" style={{ marginTop: 47 }} />
          <p style={{ marginTop: 20, fontSize: 16, color: '#333', fontWeight: 500 }}>校正中...</p>
        </div>
      )}
    </div>
  )
}

function ReplaceProbeConfirmPage({ onBack, nextPage, setPage }) {
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">更換裝置</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ position: 'absolute', top: 117, left: 26, width: 268 }}>
        <p style={{ fontSize: 16, color: '#333', lineHeight: 1.7 }}>確定要更換 裝置 嗎？</p>
        <p style={{ fontSize: 16, color: '#333', lineHeight: 1.7, marginTop: 16 }}>
          更換時，請將 <strong>新的裝置</strong> 開機，並靠近 <strong>主機</strong> 感應區，當聽到提示音、裝置亮起綠燈時，代表綁定完成。
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={onBack} style={{ flex: 1, border: 'none', background: '#666', fontSize: 20, color: '#fff', cursor: 'pointer' }}>
          取消
        </button>
        <button onClick={() => setPage(nextPage)} style={{ flex: 1, border: 'none', background: 'linear-gradient(90deg, #0081e3 0%, #1065a6 100%)', fontSize: 20, color: '#fff', cursor: 'pointer' }}>
          更換
        </button>
      </div>
    </div>
  )
}

function BindProbeScanPage({ heroImg, nextPage, title, setPage }) {
  const [progress, setProgress] = useState(100)
  const intervalRef = useRef(null)
  function finish() {
    clearInterval(intervalRef.current)
    setPage(nextPage)
  }
  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => {
        if (p <= 1) { clearInterval(intervalRef.current); finish(); return 0 }
        return p - 1
      })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])
  return (
    <div className="pq-page" onClick={finish} style={{ cursor: 'pointer' }}>
      <div className="ss-titlebar" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <div style={{ width: 40 }} />
        <span className="ss-title">{title}</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={heroImg} alt="" style={{ position: 'absolute', left: 0, top: 101, width: 320, height: 192, objectFit: 'contain' }} />
      <div style={{ position: 'absolute', top: 325, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '42px 42px 0 0', boxShadow: '0 -20px 50px rgba(0,0,0,0.15)' }} />
      <p style={{ position: 'absolute', left: 40, bottom: 90, transform: 'translateY(50%)', fontSize: 16, color: '#333', lineHeight: 1.7, zIndex: 1 }}>
        請將 <strong>新的裝置</strong> 開機，靠近 <strong>主機</strong><br />
        感應區，當聽到提示音、裝置亮起<br />綠燈時，代表綁定完成。
      </p>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
    </div>
  )
}

function ChangeProbeSuccessPage({ onBack }) {
  return (
    <div style={{ width: 320, height: 480, background: 'linear-gradient(180deg, #e5f0f6 0%, #c4d8ec 100%)', position: 'relative' }}>
      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 40, width: 292, height: 408, background: '#fff', borderRadius: 24, boxShadow: '-2px -2px 5px rgba(255,255,255,0.4), 4px 4px 7.2px rgba(133,148,173,0.4)' }}>
        <img src={imgSuccess} alt="" style={{ position: 'absolute', top: 39, left: 73, width: 144, height: 144, objectFit: 'contain' }} />
        <p style={{ position: 'absolute', top: 214, left: 0, right: 0, fontSize: 20, color: '#333', textAlign: 'center' }}>操作成功！</p>
        <button onClick={onBack} style={{ position: 'absolute', top: 311, left: '50%', transform: 'translateX(-50%)', width: 144, height: 52, border: '1px solid #4980bb', borderRadius: 8, background: 'transparent', fontSize: 18, color: '#2e739e', cursor: 'pointer' }}>
          返回
        </button>
      </div>
    </div>
  )
}

const DEVICE_DATA = {
  probe: [
    { label: 'Lock Device',    value: '門外感應器' },
    { label: 'Type',           value: 'Outdoor Probe' },
    { label: 'Firmware',       value: 'v1.0.0' },
    { label: 'ID',             value: '123456789012345678901235678' },
    { label: 'Device Warranty',value: 'TW-2027/06/10' },
  ],
  hub: [
    { label: 'Lock Device',    value: '主機' },
    { label: 'Type',           value: 'Control Hub' },
    { label: 'Firmware',       value: 'v1.0.0' },
    { label: 'ID',             value: '123456789012345678901235678' },
    { label: 'Device Warranty',value: '-' },
  ],
  controller: [
    { label: 'Lock Device',    value: '門鎖控制器' },
    { label: 'Type',           value: 'Indoor Unlocking Device' },
    { label: 'Firmware',       value: 'v1.0.0' },
    { label: 'ID',             value: '123456789012345678901235678' },
    { label: 'Device Warranty',value: 'TW-2027/06/10' },
  ],
}

function SystemResetPage({ onBack, setPage }) {
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <div style={{ width: 40 }} />
        <span className="ss-title">重置系統</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgResetFolder} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 81, width: 200, height: 200, objectFit: 'contain' }} />
      <p style={{ position: 'absolute', left: 0, right: 0, bottom: 165, transform: 'translateY(50%)', fontSize: 16, color: '#333', textAlign: 'center', lineHeight: 1.7 }}>
        確定要重置系統嗎？<br />重置後，將清除所有資料。
      </p>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', height: 60 }}>
        <button onClick={onBack} style={{ flex: 1, border: 'none', background: '#666', fontSize: 20, color: '#fff', cursor: 'pointer' }}>取消</button>
        <button onClick={() => setPage('system_reset_keyboard')} style={{ flex: 1, border: 'none', background: '#dd330d', fontSize: 20, color: '#fff', cursor: 'pointer' }}>重置系統</button>
      </div>
    </div>
  )
}

function SystemResetKeyboardPage({ onBack, setPage }) {
  const [text, setText] = useState('')
  const [kbMode, setKbMode] = useState('lower')

  const LOWER = [
    ['q','w','e','i','o','p'],
    ['a','r','t','y','u','l'],
    ['s','d','f','h','j','k'],
    ['z','c','v','g','b','m'],
  ]
  const UPPER = [
    ['Q','W','E','I','O','P'],
    ['A','R','T','Y','U','L'],
    ['S','D','F','H','J','K'],
    ['Z','C','V','G','B','M'],
  ]
  const NUM = [
    ['1','2','3','4','5','6'],
    ['7','8','9','0','!','@'],
    ['#','$','%','*','(',')'],
    ['[',']','{','}','\\','/'],
    ['|','+','-','<','>','?'],
  ]
  const SYM = [
    ['+','-','_','=','~','`'],
    [';',':','\'','"',',','.'],
    ['[',']','{','}','\\','/'],
    ['(',')', '|','<','>','#'],
    ['@','!','^','%','&','*'],
  ]

  function press(key) {
    if (key === '⌫') { setText(t => t.slice(0, -1)); return }
    if (key === 'Enter') { if (text === '#Reset') setPage('system_reset_loading'); return }
    if (key === '⇧') { setKbMode('upper'); return }
    if (key === '⇩') { setKbMode('lower'); return }
    if (key === '123') { setKbMode('num'); return }
    if (key === 'ABC') { setKbMode('lower'); return }
    if (key === '=/<') { setKbMode('sym'); return }
    setText(t => t + key)
  }

  const isLetter = kbMode === 'lower' || kbMode === 'upper'
  const mainRows = kbMode === 'lower' ? LOWER : kbMode === 'upper' ? UPPER : kbMode === 'num' ? NUM : SYM
  const bgColor = kbMode === 'lower' ? '#e8f2f7' : '#e8ebee'
  const SPC = '#bbe8f8'

  function Key({ label, bg = '#fff', flex = 1, width, onClick }) {
    return (
      <button onClick={onClick || (() => press(label))} style={{
        height: 48, background: bg, border: 'none', cursor: 'pointer',
        fontSize: 16, color: '#333', display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexShrink: 0,
        ...(width ? { width, flex: 'none' } : { flex }),
      }}>{label}</button>
    )
  }

  return (
    <div style={{ width: 320, height: 480, background: bgColor, position: 'relative' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">重置系統</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ position: 'absolute', top: 81, left: 0, width: 320, height: 60, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
        {text === '' ? (
          <>
            <span style={{ width: 2, height: 21, background: '#0081e3', flexShrink: 0 }} />
            <span style={{ fontSize: 16, color: '#666', opacity: 0.5, marginLeft: 4 }}>請輸入 #Reset 來恢復出廠值</span>
          </>
        ) : (
          <>
            <span style={{ fontSize: 16, color: '#333' }}>{text}</span>
            <span style={{ width: 2, height: 21, background: '#0081e3', marginLeft: 1, flexShrink: 0 }} />
          </>
        )}
      </div>
      <div style={{ position: 'absolute', left: 4, top: 152, width: 311, background: bgColor, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {mainRows.map((row, ri) => (
          <div key={ri} style={{ display: 'flex', gap: 6 }}>
            {row.map(k => <Key key={k} label={k} />)}
          </div>
        ))}
        {isLetter && (
          <div style={{ display: 'flex', gap: 6 }}>
            <Key label={kbMode === 'lower' ? 'x' : 'X'} width={47} />
            <Key label=" " flex={1} />
            <Key label={kbMode === 'lower' ? 'n' : 'N'} width={47} />
          </div>
        )}
        <div style={{ display: 'flex', gap: 6 }}>
          {isLetter ? (
            <>
              <Key label={kbMode === 'lower' ? '⇧' : '⇩'} bg={SPC} width={47} />
              <Key label="123" bg={SPC} flex={1} />
              <Key label="Enter" bg={SPC} flex={1} />
              <Key label="⌫" bg={SPC} width={47} />
            </>
          ) : (
            <>
              <Key label="=/<" bg={SPC} width={47} />
              <Key label="ABC" bg={SPC} flex={1} />
              <Key label="Enter" bg={SPC} flex={1} />
              <Key label="⌫" bg={SPC} width={47} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function SystemResetLoadingPage({ setPage }) {
  return (
    <div onClick={() => setPage('system_reset_landing')} style={{ width: 320, height: 480, background: 'linear-gradient(180deg, #e5f0f6 0%, #c4d8ec 100%)', position: 'relative', cursor: 'pointer' }}>
      <p style={{ position: 'absolute', left: 0, right: 0, top: 160, fontSize: 20, color: '#333', textAlign: 'center' }}>系統重置中...</p>
      <div className="spinner" style={{ position: 'absolute', left: 99, top: 228 }} />
    </div>
  )
}

function SystemResetLandingPage({ setPage }) {
  return (
    <div onClick={() => setPage('home')} style={{ width: 320, height: 480, position: 'relative', cursor: 'pointer' }}>
      <img src={imgSystemLanding} alt="" style={{ width: 320, height: 480, display: 'block', objectFit: 'cover' }} />
      <p style={{ position: 'absolute', left: 0, right: 0, top: 275, textAlign: 'center', color: '#0567b2', fontSize: 20, lineHeight: 1 }}>
        歡迎使用 <span style={{ fontSize: 23 }}>MH Lock</span>
      </p>
      <p style={{ position: 'absolute', left: 0, right: 0, top: 379, textAlign: 'center', color: '#2e739e', fontSize: 14 }}>
        系統載入中...
      </p>
    </div>
  )
}

function CateyePage({ onBack }) {
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">電子貓眼</span>
        <div style={{ width: 40 }} />
      </div>
      <img src={imgCateye} alt="" style={{ position: 'absolute', left: 0, top: 81, width: 320, height: 399, objectFit: 'cover' }} />
    </div>
  )
}

function DeviceInfoPage({ onBack, rows }) {
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">設備資訊</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {rows.map(row => (
          <div key={row.label} style={{ background: '#fefefe', height: 61, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
            <span style={{ fontSize: 16, color: '#333' }}>{row.label}</span>
            <span style={{ fontSize: 16, color: '#333', textAlign: 'right' }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LockInfoPage({ onBack, setPage, setDeviceInfo }) {
  const items = [
    { title: '門外感應器', sub: 'Type : Outdoor Probe', key: 'probe' },
    { title: '主機',       sub: 'Type : Control Hub',   key: 'hub' },
    { title: '門鎖控制器', sub: 'Type : Indoor Unlocking Device', key: 'controller' },
  ]
  function select(key) { setDeviceInfo(key); setPage('device_info') }
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">電子鎖資訊</span>
        <div style={{ width: 40 }} />
      </div>
      <div className="cl-list">
        {items.map(item => (
          <div key={item.title} className="cl-row" style={{ cursor: 'pointer' }} onClick={() => select(item.key)}>
            <div className="cl-row-text">
              <span style={{ fontSize: 16, fontWeight: 500, color: '#333' }}>{item.title}</span>
              <span style={{ fontSize: 16, color: '#666' }}>{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BindQrcodePage({ onBack }) {
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative', overflow: 'hidden' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">綁定條碼</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ position: 'absolute', top: 93, left: 24, width: 273, height: 274, borderRadius: 12, background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 212, height: 212, background: '#ccc', borderRadius: 4 }} />
      </div>
      <p style={{ position: 'absolute', top: 93 + 274 + 12, left: '50%', transform: 'translateX(-50%)', fontSize: 16, color: '#333', whiteSpace: 'nowrap' }}>
        請使用 MH Lock App 掃描條碼
      </p>
    </div>
  )
}

function SystemSettingPage({ onBack, setPage, unlockMode, wifiConnected }) {
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">電子鎖管理</span>
        <button className="ss-grid-btn" onClick={() => setPage('system_setting2')}>
          <img src={btnPage} alt="" width="40" height="40" />
        </button>
      </div>

      <div className="ss-grid">
        {SS_ITEMS.map((item) => (
          <div key={item.title} className="ss-cell"
            style={['passcode','key','volume','wifi','qrcode','lock_info'].includes(item.id) ? { cursor: 'pointer' } : undefined}
            onClick={
              item.id === 'passcode'  ? () => setPage('passcode_setting') :
              item.id === 'key'       ? () => setPage('key_management') :
              item.id === 'volume'    ? () => setPage('function_setting') :
              item.id === 'wifi'      ? () => setPage('wifi_setting') :
              item.id === 'qrcode'    ? () => setPage('bind_qrcode') :
              item.id === 'lock_info' ? () => setPage('lock_info') :
              undefined
            }
          >
            <div className="ss-cell-text">
              <span className="ss-cell-title">{item.title}</span>
              {(item.id === 'wifi' && wifiConnected ? '已連線' : item.sub
              ).split('\n').map((line, i) => (
                <span key={i} className="ss-cell-sub" style={{ color: item.id === 'wifi' && wifiConnected ? '#337C05' : item.subColor }}>{line}</span>
              ))}
            </div>
            <img src={item.icon} alt="" className="ss-cell-icon" />
          </div>
        ))}
      </div>
    </div>
  )
}

function WifiPasswordPage({ onBack, networkName, setPage, setWifiConnected }) {
  const [text, setText] = useState('')
  const [kbMode, setKbMode] = useState('lower')
  const [showToast, setShowToast] = useState(false)

  const LOWER = [
    ['q','w','e','i','o','p'],
    ['a','r','t','y','u','l'],
    ['s','d','f','h','j','k'],
    ['z','c','v','g','b','m'],
  ]
  const UPPER = [
    ['Q','W','E','I','O','P'],
    ['A','R','T','Y','U','L'],
    ['S','D','F','H','J','K'],
    ['Z','C','V','G','B','M'],
  ]
  const NUM = [
    ['1','2','3','4','5','6'],
    ['7','8','9','0','!','@'],
    ['#','$','%','*','(',')'],
    ['[',']','{','}','\\','/'],
    ['|','+','-','<','>','?'],
  ]
  const SYM = [
    ['+','-','_','=','~','`'],
    [';',':','\'','"',',','.'],
    ['[',']','{','}','\\','/'],
    ['(',')',  '|','<','>','#'],
    ['@','!','^','%','&','*'],
  ]

  function press(key) {
    if (key === '⌫') { setText(t => t.slice(0, -1)); return }
    if (key === 'Enter') { setWifiConnected(true); setShowToast(true); setTimeout(() => setPage('system_setting'), 1500); return }
    if (key === '⇧') { setKbMode('upper'); return }
    if (key === '⇩') { setKbMode('lower'); return }
    if (key === '123') { setKbMode('num'); return }
    if (key === 'ABC') { setKbMode('lower'); return }
    if (key === '=/<') { setKbMode('sym'); return }
    setText(t => t + key)
  }

  const isLetter = kbMode === 'lower' || kbMode === 'upper'
  const mainRows = kbMode === 'lower' ? LOWER : kbMode === 'upper' ? UPPER : kbMode === 'num' ? NUM : SYM
  const bgColor = kbMode === 'lower' ? '#e8f2f7' : '#e8ebee'
  const SPC = '#bbe8f8'

  function Key({ label, bg = '#fff', flex = 1, width, onClick }) {
    return (
      <button onClick={onClick || (() => press(label))} style={{
        height: 48, background: bg, border: 'none', cursor: 'pointer',
        fontSize: 16, color: '#333', display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexShrink: 0,
        ...(width ? { width, flex: 'none' } : { flex }),
      }}>{label}</button>
    )
  }

  return (
    <div style={{ width: 320, height: 480, background: bgColor, position: 'relative' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">{networkName}</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ position: 'absolute', top: 81, left: 0, width: 320, height: 60, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 16px', borderBottom: '1px solid #eee' }}>
        <span style={{ fontSize: 16, color: '#333' }}>{text}</span>
        <span style={{ width: 2, height: 20, background: '#0081e3', marginLeft: 1, flexShrink: 0, animation: 'none' }} />
      </div>
      <div style={{ position: 'absolute', left: 4, top: 152, width: 311, background: bgColor, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {mainRows.map((row, ri) => (
          <div key={ri} style={{ display: 'flex', gap: 6 }}>
            {row.map(k => <Key key={k} label={k} />)}
          </div>
        ))}
        {isLetter && (
          <div style={{ display: 'flex', gap: 6 }}>
            <Key label={kbMode === 'lower' ? 'x' : 'X'} width={47} />
            <Key label=" " flex={1} />
            <Key label={kbMode === 'lower' ? 'n' : 'N'} width={47} />
          </div>
        )}
        <div style={{ display: 'flex', gap: 6 }}>
          {isLetter ? (
            <>
              <Key label={kbMode === 'lower' ? '⇧' : '⇩'} bg={SPC} width={47} />
              <Key label="123" bg={SPC} flex={1} />
              <Key label="Enter" bg={SPC} flex={1} />
              <Key label="⌫" bg={SPC} width={47} />
            </>
          ) : (
            <>
              <Key label="=/<" bg={SPC} width={47} />
              <Key label="ABC" bg={SPC} flex={1} />
              <Key label="Enter" bg={SPC} flex={1} />
              <Key label="⌫" bg={SPC} width={47} />
            </>
          )}
        </div>
      </div>
      {showToast && <div className="toast" style={{ zIndex: 2 }}>已連線！</div>}
    </div>
  )
}

function NearbyWifiPage({ onBack, setPage, setWifiNetwork }) {
  const networks = ['MH Tech', 'Smart Home 5G', "Andy's iphone", 'YEH', 'T-hub 5G', 'Citylink']
  function selectNetwork(name) {
    setWifiNetwork(name)
    setPage('wifi_password')
  }
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">附近 Wifi</span>
        <div style={{ width: 40 }} />
      </div>
      <div className="cl-list">
        {networks.map(name => (
          <div key={name} className="cl-row" style={{ cursor: 'pointer' }} onClick={() => selectNetwork(name)}>
            <span className="cl-row-label">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BurnWifiPage({ onBack, setPage }) {
  const saved = ['MH Tech', "Andy's iphone", 'Citylink']
  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">已儲存 Wifi</span>
        <div style={{ width: 40 }} />
      </div>
      <div className="cl-list">
        <div className="cl-row" style={{ cursor: 'pointer' }} onClick={() => setPage('nearby_wifi')}>
          <span className="cl-row-label">＋ 新增 wifi</span>
        </div>
        {saved.map(name => (
          <div key={name} className="cl-row" style={{ cursor: 'pointer' }} onClick={() => setPage('burn_wifi_card')}>
            <span className="cl-row-label">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BurnWifiCardPage({ setPage }) {
  const [progress, setProgress] = useState(100)
  const [showToast, setShowToast] = useState(false)
  const intervalRef = useRef(null)

  function finish() {
    clearInterval(intervalRef.current)
    setShowToast(true)
    setTimeout(() => setPage('burn_wifi'), 1500)
  }

  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => {
        if (p <= 1) { clearInterval(intervalRef.current); finish(); return 0 }
        return p - 1
      })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div className="pq-page" onClick={finish} style={{ cursor: 'pointer' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 81, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
        <span style={{ fontSize: 16, color: '#333' }}>燒錄 wifi 卡</span>
      </div>
      <img src={imgWificard} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 101, width: 200, height: 200, objectFit: 'contain' }} />
      <div className="pq-bezel" style={{ top: 325 }}>
        <p style={{ fontSize: 14, color: '#333', textAlign: 'center', lineHeight: 1.6, padding: '0 32px', marginTop: 16 }}>
          請將網路卡放置於 MH Lock 螢幕<br />上方的感應圖示上進行燒錄。<br />當聽到逼聲時，即表示燒錄成功。
        </p>
      </div>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
      {showToast && <div className="toast" style={{ zIndex: 2 }}>wifi 卡燒錄成功！</div>}
    </div>
  )
}

function WifiSettingPage({ onBack, setPage }) {
  const rows = [
    { label: '尋找附近 Wi-Fi', onClick: () => setPage('nearby_wifi') },
    { label: '使用 Wi-Fi 卡連線', onClick: () => setPage('wifi_card') },
    { label: '燒錄 Wi-Fi 卡', onClick: () => setPage('burn_wifi') },
  ]
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', display: 'flex', flexDirection: 'column' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">Wifi 設定</span>
        <div style={{ width: 40 }} />
      </div>
      <div className="cl-list">
        {rows.map(row => (
          <div key={row.label} style={{ background: '#fff', height: 60, display: 'flex', alignItems: 'center', padding: '0 20px', cursor: row.onClick ? 'pointer' : undefined }} onClick={row.onClick}>
            <span style={{ fontSize: 16, fontWeight: 500, color: '#666' }}>{row.label}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 14, color: '#333', lineHeight: 1.6, padding: '16px 24px 0' }}>
        為確保更高的系統穩定性與裝置相容性，本裝置僅支援顯示英文、常用中文與符號。若 Wi-Fi 名稱包含中文難字、日文等字元，可能會出現無法辨識的符號或亂碼，這是正常現象，不影響 Wi-Fi 的連線功能。
        <br /><br />
        若想避免顯示異常，建議將 Wi-Fi 名稱設為英文與數字。
        <br /><br />
        您也可使用 Wi-Fi 卡，快速感應連線 Wi-Fi。操作方式請參考說明書。
      </p>
    </div>
  )
}

function WifiCardPage({ setPage, setWifiConnected }) {
  const [progress, setProgress] = useState(100)
  const [showToast, setShowToast] = useState(false)
  const intervalRef = useRef(null)

  function finish() {
    clearInterval(intervalRef.current)
    setWifiConnected(true)
    setShowToast(true)
    setTimeout(() => setPage('system_setting'), 1500)
  }

  useEffect(() => {
    setProgress(100)
    intervalRef.current = setInterval(() => {
      setProgress(p => {
        if (p <= 1) { clearInterval(intervalRef.current); finish(); return 0 }
        return p - 1
      })
    }, 100)
    return () => clearInterval(intervalRef.current)
  }, [])

  function handleClick() { finish() }

  return (
    <div className="pq-page" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 81, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
        <span style={{ fontSize: 16, color: '#333' }}>WiFi 卡片</span>
      </div>
      <img src={imgWificard} alt="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 101, width: 200, height: 200, objectFit: 'contain' }} />
      <div className="pq-bezel" style={{ top: 325 }}>
        <p style={{ fontSize: 14, color: '#333', textAlign: 'center', lineHeight: 1.6, padding: '0 32px', marginTop: 16 }}>
          請將卡片放置於 MH Lock 螢幕<br />旁邊的感應圖示上進行新增。<br />當聽到逼聲時，即表示 WiFi 讀取成功。
        </p>
      </div>
      <div style={{ position: 'absolute', left: 40, top: 443, width: 231, height: 6, borderRadius: 3, background: '#d9d9d9', zIndex: 1 }}>
        <div style={{ width: `${progress}%`, height: '100%', borderRadius: 3, background: '#2880c2', transition: 'width 0.1s linear' }} />
      </div>
      {showToast && <div className="toast" style={{ zIndex: 2 }}>已連線！</div>}
    </div>
  )
}

function UnlockModePage({ onBack, unlockMode, setUnlockMode }) {
  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', display: 'flex', flexDirection: 'column' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">開鎖模式</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ background: '#fff', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
        <span style={{ fontSize: 16, color: '#666' }}>雙重驗證</span>
        <RowToggle on={unlockMode} setOn={setUnlockMode} />
      </div>
      <p style={{ fontSize: 14, color: '#333', lineHeight: 1.6, padding: '20px 24px 0' }}>
        啟用雙重驗證後，開門時，需在電子鎖的螢幕上輸入密碼，並感應卡片 / 生物辨識，才可開啟門鎖。
      </p>
    </div>
  )
}

function RowToggle({ on, setOn }) {
  return (
    <button onClick={() => setOn(!on)} style={{ flexShrink: 0, width: 51, height: 31, borderRadius: 100, border: 'none', background: on ? '#34c759' : '#ccc', cursor: 'pointer', padding: 0, position: 'relative', transition: 'background 0.2s' }}>
      <div style={{ position: 'absolute', top: 2, width: 27, height: 27, borderRadius: 100, background: '#fff', boxShadow: '0 3px 8px rgba(0,0,0,0.15)', transition: 'left 0.2s', left: on ? 22 : 2 }} />
    </button>
  )
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M5 12.5l4.5 4.5 9.5-10" stroke="#0081e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SensingModePage({ onBack, sensingMode, setSensingMode }) {
  const selected = sensingMode
  const setSelected = setSensingMode

  const options = [
    { id: 'energy',  title: '節能待機', sub: '需先觸摸螢幕，再進行感應開鎖' },
    { id: 'instant', title: '即時感應', sub: '可隨時感應開鎖' },
  ]

  return (
    <div style={{ width: 320, height: 480, background: '#e8f2f7', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">感應模式</span>
        <div style={{ width: 40 }} />
      </div>
      <div className="cl-list">
        {options.map(opt => (
          <div key={opt.id} className="cl-row" style={{ cursor: 'pointer' }} onClick={() => setSelected(opt.id)}>
            <div className="cl-row-text">
              <span style={{ fontSize: 18, fontWeight: 500, color: '#333', lineHeight: 1 }}>{opt.title}</span>
              <span className="cl-row-label">{opt.sub}</span>
            </div>
            {selected === opt.id && <CheckIcon />}
          </div>
        ))}
      </div>
      <p style={{ fontSize: 16, color: '#333', lineHeight: 1.6, padding: '20px 24px 0' }}>
        使用節能待機模式，需先觸摸螢幕，喚醒電子所，再進行卡片 / 生物辨識感應。使用此模式，可大幅延長電子鎖的續航時間。
      </p>
    </div>
  )
}

const SENSING_LABELS = { energy: '節能待機', instant: '即時感應' }

function FunctionSettingPage({ onBack, setPage, sensingMode }) {
  const [offlineUnlock, setOfflineUnlock] = useState(true)
  const [sound,         setSound]         = useState(true)
  const [managePw,      setManagePw]      = useState(true)
  const [rental,        setRental]        = useState(true)

  const rows = [
    { title: '感應模式',   sub: SENSING_LABELS[sensingMode],  trailing: 'arrow', onClick: () => setPage('sensing_mode') },
    { title: '離線解鎖',   sub: '離線時容許外部感應解鎖', trailing: [offlineUnlock, setOfflineUnlock] },
    { title: '音效',       sub: '電鈴、警示音不會被關閉', trailing: [sound, setSound] },
    { title: '管理密碼',   sub: '主機管理模式的密碼',     trailing: [managePw, setManagePw] },
    { title: '租賃模式',   sub: '是否開啟租賃模式',       trailing: [rental, setRental] },
  ]

  return (
    <div className="ss-page">
      <div className="ss-titlebar">
        <button className="ss-back-btn" onClick={onBack}>
          <img src={btnCircle} alt="" width="40" height="40" />
        </button>
        <span className="ss-title">功能設定</span>
        <div style={{ width: 40 }} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div className="cl-list">
          {rows.map(row => (
            <div key={row.title} className="cl-row" style={{ cursor: row.onClick ? 'pointer' : undefined }} onClick={row.onClick}>
              <div className="cl-row-text">
                <span style={{ fontSize: 18, fontWeight: 500, color: '#333', lineHeight: 1 }}>{row.title}</span>
                <span className="cl-row-label">{row.sub}</span>
              </div>
              {row.trailing === 'arrow'
                ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M9 6l6 6-6 6" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                : <RowToggle on={row.trailing[0]} setOn={row.trailing[1]} />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  const [pendingCode, setPendingCode] = useState('')
  const [selectedCard, setSelectedCard] = useState(null)
  const [selectedMkey, setSelectedMkey] = useState(null)
  const [selectedLock, setSelectedLock] = useState(null)
  const [selectedFinger, setSelectedFinger] = useState(null)
  const [selectedFace, setSelectedFace] = useState(null)
  const [selectedHand, setSelectedHand] = useState(null)
  const [pendingMkeyPin, setPendingMkeyPin] = useState('')
  const [sensingMode, setSensingMode] = useState('energy')
  const [unlockMode, setUnlockMode] = useState(false)
  const [wifiNetwork, setWifiNetwork] = useState('')
  const [wifiConnected, setWifiConnected] = useState(false)
  const [deviceInfo, setDeviceInfo] = useState(null)
  const [wifiOk, setWifiOk] = useState(true)

  return (
    <div className="app-root">
      <div className="app-layout">
        <div className="frame-canvas">
          <div className="phone-frame">
            {page === 'home'           && <HomePage setPage={setPage} wifiOk={wifiOk} />}
            {page === 'home_unlock'    && <HomeUnlockPage setPage={setPage} wifiOk={wifiOk} />}
            {page === 'home_open'      && <ImagePage src={imgHomeOpen} onBack={() => setPage('home')} onLogin={() => setPage('login')} wifiOk={wifiOk} />}
            {page === 'login'          && <LoginPage setPage={setPage} />}
            {page === 'system_setting'    && <SystemSettingPage onBack={() => setPage('home')} setPage={setPage} unlockMode={unlockMode} wifiConnected={wifiConnected} />}
            {page === 'bind_qrcode'       && <BindQrcodePage onBack={() => setPage('system_setting')} />}
            {page === 'unlock_mode'       && <UnlockModePage onBack={() => setPage('system_setting')} unlockMode={unlockMode} setUnlockMode={setUnlockMode} />}
            {page === 'wifi_setting'      && <WifiSettingPage onBack={() => setPage('system_setting')} setPage={setPage} />}
            {page === 'nearby_wifi'       && <NearbyWifiPage onBack={() => setPage('wifi_setting')} setPage={setPage} setWifiNetwork={setWifiNetwork} />}
            {page === 'wifi_password'     && <WifiPasswordPage onBack={() => setPage('nearby_wifi')} networkName={wifiNetwork} setPage={setPage} setWifiConnected={setWifiConnected} />}
            {page === 'wifi_card'         && <WifiCardPage setPage={setPage} setWifiConnected={setWifiConnected} />}
            {page === 'burn_wifi'         && <BurnWifiPage onBack={() => setPage('wifi_setting')} setPage={setPage} />}
            {page === 'burn_wifi_card'    && <BurnWifiCardPage setPage={setPage} />}
            {page === 'function_setting'  && <FunctionSettingPage onBack={() => setPage('system_setting')} setPage={setPage} sensingMode={sensingMode} />}
            {page === 'sensing_mode'      && <SensingModePage onBack={() => setPage('function_setting')} sensingMode={sensingMode} setSensingMode={setSensingMode} />}
            {page === 'system_setting2'  && <SystemSetting2Page onBack={() => setPage('home')} setPage={setPage} />}
            {page === 'probe_addon'      && <ProbeAddonPage onBack={() => setPage('system_setting2')} setPage={setPage} />}
            {page === 'change_battery'        && <ChangeBatteryPage onBack={() => setPage('probe_addon')} setPage={setPage} />}
            {page === 'remove_device'         && <RemoveDevicePage onBack={() => setPage('probe_addon')} />}
            {page === 'addon_manage'              && <AddonManagePage onBack={() => setPage('system_setting2')} setPage={setPage} />}
            {page === 'addon_info'                && <AddonInfoPage onBack={() => setPage('addon_manage')} />}
            {page === 'addon_remove_confirm'      && <AddonRemoveConfirmPage onBack={() => setPage('addon_manage')} setPage={setPage} />}
            {page === 'addon_remove_data'         && <AddonRemoveDataPage onBack={() => setPage('addon_remove_confirm')} setPage={setPage} />}
            {page === 'addon_scan'                && <AddonScanPage setPage={setPage} />}
            {page === 'addon_confirm'             && <AddonConfirmPage onBack={() => setPage('addon_manage')} setPage={setPage} />}
            {page === 'addon_success'             && <ChangeProbeSuccessPage onBack={() => setPage('addon_manage')} />}
            {page === 'controller_addon'          && <ControllerAddonPage onBack={() => setPage('system_setting2')} setPage={setPage} />}
            {page === 'lock_detect'               && <LockDetectPage onBack={() => setPage('controller_addon')} setPage={setPage} />}
            {page === 'lock_position'             && <LockPositionPage onBack={() => setPage('controller_addon')} setPage={setPage} />}
            {page === 'lock_detect_success'       && <ChangeProbeSuccessPage onBack={() => setPage('controller_addon')} />}
            {page === 'replace_probe_confirm'     && <ReplaceProbeConfirmPage onBack={() => setPage('probe_addon')} nextPage="bind_probe_scan" setPage={setPage} />}
            {page === 'bind_probe_scan'           && <BindProbeScanPage heroImg={imgAChange} nextPage="change_probe_success" title="綁定門外感應器" setPage={setPage} />}
            {page === 'change_probe_success'      && <ChangeProbeSuccessPage onBack={() => setPage('system_setting2')} />}
            {page === 'replace_controller_confirm'&& <ReplaceProbeConfirmPage onBack={() => setPage('controller_addon')} nextPage="bind_controller_scan" setPage={setPage} />}
            {page === 'bind_controller_scan'      && <BindProbeScanPage heroImg={imgCChange} nextPage="change_controller_success" title="綁定門鎖控制器" setPage={setPage} />}
            {page === 'change_controller_success' && <ChangeProbeSuccessPage onBack={() => setPage('system_setting2')} />}
            {page === 'cateye'           && <CateyePage onBack={() => setPage('system_setting2')} />}
            {page === 'system_reset'          && <SystemResetPage onBack={() => setPage('system_setting2')} setPage={setPage} />}
            {page === 'system_reset_keyboard' && <SystemResetKeyboardPage onBack={() => setPage('system_reset')} setPage={setPage} />}
            {page === 'system_reset_loading'  && <SystemResetLoadingPage setPage={setPage} />}
            {page === 'system_reset_landing'  && <SystemResetLandingPage setPage={setPage} />}
            {page === 'lock_info'        && <LockInfoPage onBack={() => setPage('system_setting')} setPage={setPage} setDeviceInfo={setDeviceInfo} />}
            {page === 'device_info'      && <DeviceInfoPage onBack={() => setPage('lock_info')} rows={DEVICE_DATA[deviceInfo] ?? []} />}
            {page === 'passcode_setting' && <PasscodeSettingPage onBack={() => setPage('system_setting')} setPage={setPage} />}
            {page === 'key_management'      && <KeyManagementPage onBack={() => setPage('system_setting')} setPage={setPage} />}
            {page === 'finger_management'   && <FingerManagementPage onBack={() => setPage('key_management')} setPage={setPage} setSelectedFinger={setSelectedFinger} />}
            {page === 'finger_add'          && <FingerAddPage setPage={setPage} />}
            {page === 'finger_delete'       && <FingerDeletePage onBack={() => setPage('finger_management')} item={selectedFinger} setPage={setPage} />}
            {page === 'face_management'     && <FaceManagementPage onBack={() => setPage('key_management')} setPage={setPage} setSelectedFace={setSelectedFace} />}
            {page === 'face_add'            && <FaceAddPage setPage={setPage} />}
            {page === 'face_delete'         && <FaceDeletePage onBack={() => setPage('face_management')} item={selectedFace} setPage={setPage} />}
            {page === 'hand_management'     && <HandManagementPage onBack={() => setPage('key_management')} setPage={setPage} setSelectedHand={setSelectedHand} />}
            {page === 'hand_add'            && <HandAddPage setPage={setPage} />}
            {page === 'hand_delete'         && <HandDeletePage onBack={() => setPage('hand_management')} item={selectedHand} setPage={setPage} />}
            {page === 'card_management'  && <CardManagementPage onBack={() => setPage('key_management')} setPage={setPage} />}
            {page === 'card_remove'      && <CardRemovePage onBack={() => setPage('card_management')} setPage={setPage} setSelectedCard={setSelectedCard} />}
            {page === 'card_delete_all'       && <CardDeleteAllPage onBack={() => setPage('card_remove')} setPage={setPage} />}
            {page === 'card_scan_delete'      && <CardScanDeletePage setPage={setPage} />}
            {page === 'card_scan_delete_confirm' && <CardScanDeleteConfirmPage setPage={setPage} />}
            {page === 'card_item_delete'         && <CardScanDeleteConfirmPage setPage={setPage} card={selectedCard} />}
            {page === 'card_list'        && <CardListPage onBack={() => setPage('card_management')} setPage={setPage} />}
            {page === 'card_read'        && <CardReadPage onBack={() => setPage('card_list')} setPage={setPage} />}
            {page === 'card_delete'      && <CardDeletePage onBack={() => setPage('card_list')} setPage={setPage} />}
            {page === 'card_add'         && <CardAddPage setPage={setPage} />}
            {page === 'card_add_result'  && <CardAddResultPage setPage={setPage} />}
            {page === 'mkey_management'  && <MkeyManagementPage onBack={() => setPage('key_management')} setPage={setPage} />}
            {page === 'mkey_add'         && <MkeyAddPage onBack={() => setPage('mkey_management')} setPage={setPage} />}
            {page === 'mkey_scan'        && <MkeyScanPage setPage={setPage} />}
            {page === 'mkey_add_pin'     && <MkeyPinPage onBack={() => setPage('mkey_scan')} setPage={setPage} />}
            {page === 'mkey_change_pin_scan' && <MkeyChangePinScanPage setPage={setPage} />}
            {page === 'mkey_change_pin_current' && (
              <MkeyPinPage
                onBack={() => setPage('mkey_change_pin_scan')}
                title="請輸入 M-key PIN 碼"
                onConfirm={() => setPage('mkey_change_pin_new')}
                setPage={setPage}
              />
            )}
            {page === 'mkey_change_pin_new' && (
              <MkeyPinPage
                onBack={() => setPage('mkey_change_pin_current')}
                title="請設定 4 位 M-key pin 碼"
                onConfirm={code => { setPendingMkeyPin(code); setPage('mkey_change_pin_confirm') }}
                setPage={setPage}
              />
            )}
            {page === 'mkey_change_pin_confirm' && (
              <MkeyChangePinConfirmPage
                onBack={() => setPage('mkey_change_pin_new')}
                expected={pendingMkeyPin}
                setPage={setPage}
              />
            )}
            {page === 'mkey_list'          && <MkeyListPage onBack={() => setPage('mkey_management')} setPage={setPage} setSelectedMkey={setSelectedMkey} />}
            {page === 'mkey_delete'        && <MkeyDeletePage onBack={() => setPage('mkey_list')} item={selectedMkey} setPage={setPage} />}
            {page === 'mkey_search_scan'   && <MkeySearchScanPage setPage={setPage} />}
            {page === 'mkey_search_result' && <MkeySearchResultPage setPage={setPage} />}
            {page === 'mkey_lock_scan'     && <MkeyLockScanPage setPage={setPage} />}
            {page === 'mkey_lock_pin'      && (
              <MkeyPinPage
                onBack={() => setPage('mkey_lock_scan')}
                title="請輸入 M-key PIN 碼"
                onConfirm={() => setPage('mkey_lock_list')}
                setPage={setPage}
              />
            )}
            {page === 'mkey_lock_list'   && <MkeyLockListPage onBack={() => setPage('mkey_management')} setPage={setPage} setSelectedLock={setSelectedLock} />}
            {page === 'mkey_lock_remove' && <MkeyLockRemovePage onBack={() => setPage('mkey_lock_list')} item={selectedLock} setPage={setPage} />}
            {page === 'passcode_query'        && <PasscodeQueryPage onBack={() => setPage('passcode_setting')} />}
            {page === 'manage_passcode_query' && <ManagePasscodeQueryPage onBack={() => setPage('passcode_setting')} />}
            {page === 'sos_passcode_query'    && <SosPasscodeQueryPage onBack={() => setPage('passcode_setting')} />}
            {page === 'change_unlock'  && <ChangePasscodePage title="請設定 6-8 位開門密碼" maxDigits={8} minDigits={6} errorText="請輸入 6~8 個字元" onBack={() => setPage('passcode_setting')} onNext={code => { setPendingCode(code); setPage('confirm_unlock') }} />}
            {page === 'confirm_unlock' && <ConfirmPasscodePage title="請確認開門密碼" toastText="開鎖密碼變更成功，請妥善保管" mismatchText="與開門碼不相符" maxDigits={8} expected={pendingCode} onBack={() => setPage('change_unlock')} onConfirmed={() => setPage('passcode_setting')} />}
            {page === 'change_manage'  && <ChangePasscodePage title="請設定 4 位管理密碼" maxDigits={4} minDigits={4} errorText="請輸入 4 個字元" onBack={() => setPage('passcode_setting')} onNext={code => { setPendingCode(code); setPage('confirm_manage') }} />}
            {page === 'confirm_manage' && <ConfirmPasscodePage title="請確認管理密碼" toastText="管理密碼變更成功，請妥善保管" mismatchText="與管理碼不相符" maxDigits={4} expected={pendingCode} onBack={() => setPage('change_manage')} onConfirmed={() => setPage('passcode_setting')} />}
            {page === 'set_sos'        && <ChangePasscodePage title="請設定 6-8 位求救密碼" maxDigits={8} minDigits={6} errorText="請輸入 6~8 個字元" onBack={() => setPage('passcode_setting')} onNext={code => { setPendingCode(code); setPage('confirm_sos') }} />}
            {page === 'confirm_sos'    && <ConfirmPasscodePage title="請確認求救密碼" toastText="求救密碼設定成功，請妥善保管" mismatchText="與求救密碼不相符" maxDigits={8} expected={pendingCode} onBack={() => setPage('set_sos')} onConfirmed={() => setPage('passcode_setting')} />}
          </div>
          {['home','home_unlock','home_open'].includes(page) && wifiOk && <>
            <span className="canvas-label" style={{ left: 75, top: 16 }}>門外 80%</span>
            <span className="canvas-label" style={{ left: 198, top: 16 }}>門內 75%</span>
            <div style={{ position: 'absolute', left: 163, top: 23, pointerEvents: 'none' }}><BatteryIcon level={75} /></div>
            <div style={{ position: 'absolute', left: 279, top: 23, pointerEvents: 'none' }}><BatteryIcon level={38} /></div>
          </>}
        </div>
        <div className="scenario-btns">
          <button
            className={`scenario-btn${wifiOk ? ' scenario-btn--active' : ''}`}
            onClick={() => setWifiOk(true)}
          >正常連線</button>
          <button
            className={`scenario-btn${!wifiOk ? ' scenario-btn--active' : ''}`}
            onClick={() => setWifiOk(false)}
          >網路斷線</button>
        </div>
      </div>
    </div>
  )
}
